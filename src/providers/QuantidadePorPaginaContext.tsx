import {createContext, SetStateAction} from "react";

interface QuantidadeInterface {
  quantidade: number;
  alterarQuantidade: (value: SetStateAction<number>) => void;
}

const defaultValues = {
  quantidade: 10,
  alterarQuantidade: (_: unknown) => { return }
}

const QuantidadePorPaginaContext = createContext<QuantidadeInterface>(defaultValues);

export default QuantidadePorPaginaContext;
