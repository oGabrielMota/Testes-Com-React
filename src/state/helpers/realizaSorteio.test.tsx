import { realizarSorteio } from "./realizaSorteio";

describe("Dado um sorteio de amigo secreto", () => {
  test("Cadas participante não sortei o prorpio nome", () => {
    const participantes = [
      "Gabriel",
      "Moreira",
      "Mota",
      "Giovanna",
      "Beatriz",
      "Lucas",
    ];

    const sorteio = realizarSorteio(participantes);

    participantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
