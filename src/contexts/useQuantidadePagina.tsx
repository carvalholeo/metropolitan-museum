import { useContext } from "react";

import QuantidadePorPaginaContext from "../providers/QuantidadePorPaginaContext";

function useQuantidadePagina() {
  const contexto = useContext(QuantidadePorPaginaContext);

  if (!contexto) {
    throw new Error("Você só pode usar o useQuantidadePagina dentro do contexto apropriado");
  }

  return contexto;
}

export default useQuantidadePagina;
