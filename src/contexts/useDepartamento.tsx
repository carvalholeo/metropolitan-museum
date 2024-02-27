import { useContext } from "react";

import DepartamentoContext from "../providers/DepartamentoContext";

function useDepartamento() {
  const contexto = useContext(DepartamentoContext);

  if (!contexto) {
    throw new Error("Você é burro? Que burrice! Use isso apenas no contexto apropriado");
  }

  return contexto;
}

export default useDepartamento;
