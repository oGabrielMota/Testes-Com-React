import React, { useRef, useState } from "react";
import { useAdicionarParticipantes } from "../state/hook/useAdicionarParticipantes";
import { useMensagemDeErro } from "../state/hook/useMensagemDeErro";
import "./Formulario.css";

export default function Formulario() {
  const [nome, setNome] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const addNaLista = useAdicionarParticipantes();

  const mensagemDeErro = useMensagemDeErro();

  const addParticipantes = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    addNaLista(nome);
    setNome("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={addParticipantes}>
      <div className="grupo-input-btn">
        <input
          ref={inputRef}
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Insira os nomes dos participantes"
        />
        <button disabled={!nome}>Adicionar</button>
        {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
      </div>
    </form>
  );
}
