import {createContext, SetStateAction} from "react";

interface QuantidadeInterface {
  pagina: number;
  mudarPagina: (value: SetStateAction<number>) => void;
}

const defaultValues = {
  pagina: 1,
  mudarPagina: (_: unknown) => { return }
}

const PaginaContext = createContext<QuantidadeInterface>(defaultValues);

export default PaginaContext;
