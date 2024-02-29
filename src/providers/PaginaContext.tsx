import { createContext } from "react";

interface QuantidadeInterface {
  pagina?: number;
  paginasTotais?: number;
  mudarPagina: (value: PaginaInterface) => void;
}

// HOstinger = empresa de hospedagem (hosting)
// Hoisting = içamento (puxar as declarações de funções pro começo)

export interface PaginaInterface {
  paginaAtual?: number;
  paginasTotais?: number;
}

const defaultValues = {
  pagina: 1,
  mudarPagina: (_: unknown) => { return }
}

const PaginaContext = createContext<QuantidadeInterface>(defaultValues);

export default PaginaContext;
