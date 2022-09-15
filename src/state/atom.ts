import { atom } from "recoil";

export const listaParticipantesState = atom<string[]>({
  key: "listaParticipantes",
  default: [],
});

export const erroState = atom<string>({
  key: "erroState",
  default: "",
});
