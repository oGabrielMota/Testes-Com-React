import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario";

describe("O Comportamento do Formulario.tsx", () => {
  test("Quando o input está vazio, novos participantes não podem ser adicionados", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const botao = screen.getByRole("button");

    expect(input).toBeInTheDocument();

    expect(botao).toBeDisabled();
  });

  test("Adicionar um participante caso exista um nome prenchido", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const botao = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Gabriel Mota",
      },
    });

    fireEvent.click(botao);

    expect(input).toHaveFocus();

    expect(input).toHaveValue("");
  });

  // test("Nomes duplicados não da ein", () => {
  //   render(
  //     <RecoilRoot>
  //       <Formulario />
  //     </RecoilRoot>
  //   );

  //   const input = screen.getByPlaceholderText(
  //     "Insira os nomes dos participantes"
  //   );

  //   const botao = screen.getByRole("button");

  //   fireEvent.change(input, {
  //     target: {
  //       value: "Gabriel Mota",
  //     },
  //   });

  //   fireEvent.click(botao);

  //   const mensagemDeErro = screen.getByRole("alert");

  //   expect(mensagemDeErro.textContent).toBe(
  //     "Nomes duplicados não são permitidos"
  //   );
  // });

  // test("A mensagem de erro some", () => {
  //   jest.useFakeTimers();

  //   render(
  //     <RecoilRoot>
  //       <Formulario />
  //     </RecoilRoot>
  //   );

  //   const input = screen.getByPlaceholderText(
  //     "Insira os nomes dos participantes"
  //   );

  //   const botao = screen.getByRole("button");

  //   fireEvent.change(input, {
  //     target: {
  //       value: "Gabriel Mota",
  //     },
  //   });

  //   fireEvent.click(botao);

  //   let mensagemDeErro = screen.queryByRole("alert");

  //   expect(mensagemDeErro).toBeInTheDocument();

  //   act(() => {
  //     jest.runAllTimers();
  //   });

  //   mensagemDeErro = screen.queryByRole("alert");
  //   expect(mensagemDeErro).toBeNull();
  // });
});
