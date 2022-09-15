import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "../state/hook/useListaParticipantes";
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio";
import { Sorteio } from "./Sorteio";

jest.mock("../state/hook/useListaParticipantes", () => {
  return {
    useListaParticipantes: jest.fn(),
  };
});

jest.mock("../state/hook/useResultadoSorteio", () => {
  return {
    useResultadoSorteio: jest.fn(),
  };
});

describe("A pagina de sorteio", () => {
  const participantes = ["Gabriel", "Moreira", "Mota"];

  const resultado = new Map([
    ["Gabriel", "Mota"],
    ["Moreira", "Giovanna"],
    ["Beatriz", "Lucas"],
  ]);

  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
    (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
  });

  test("Todos os participantes podem exivir o seu amigo secreto", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const opcoes = screen.queryAllByRole("option");
    expect(opcoes).toHaveLength(participantes.length);
  });

  test("O amigo secreto é exibido quando solicitado", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText("Selecione seu nome");
    fireEvent.change(select, {
      target: {
        value: participantes[0],
      },
    });

    const btn = screen.getByRole("button");

    fireEvent.click(btn);

    const amgSecreto = screen.getByRole("alert");

    expect(amgSecreto).toBeInTheDocument();
  });
});
