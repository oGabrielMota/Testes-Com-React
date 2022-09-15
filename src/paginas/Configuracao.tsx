import Formulario from "../componentes/Formulario";
import { ListaParticipantes } from "../componentes/ListaParticipantes";
import { Rodape } from "../componentes/Rodape";

export const Configuracao = () => {
  return (
    <>
      <section>
        <h2>Vamos começar!</h2>
        <Formulario />
        <ListaParticipantes />
        <Rodape />
      </section>
    </>
  );
};
