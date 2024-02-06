import { useContext } from "react";

import RespostaContext from "../providers/RespostaContext";

function useRespostaApi() {
  const contexto = useContext(RespostaContext);

  if (!contexto) {
    throw new Error('useRespostaApi deve ser usado apenas dentro do RespostaContext.');
  }

  return contexto;
}

export default useRespostaApi;
