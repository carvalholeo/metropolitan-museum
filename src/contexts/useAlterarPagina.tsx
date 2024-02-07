import { useContext } from "react";

import PaginaContext from "../providers/PaginaContext";

function useAlterarPagina() {
  const contexto = useContext(PaginaContext);

  if (!contexto) {
    throw new Error("Você só pode usar o useAlterarPagina dentro do contexto apropriado");
  }

  return contexto;
}

export default useAlterarPagina;
