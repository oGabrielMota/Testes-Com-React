import { useNavigate } from "react-router-dom";
import { useListaParticipantes } from "../state/hook/useListaParticipantes";

export const Rodape = () => {
  const participantes = useListaParticipantes();

  const navegarPara = useNavigate();

  const iniciar = () => {
    navegarPara("/sorteiro");
  };
  return (
    <footer>
      <button disabled={participantes.length < 3} onClick={iniciar}>
        Inciar brincadeira
      </button>
    </footer>
  );
};
