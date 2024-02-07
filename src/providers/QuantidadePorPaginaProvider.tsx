import { useState, ReactNode, SetStateAction } from "react";
import QuantidadePorPaginaContext from "./QuantidadePorPaginaContext";

function QuantidadePorPaginaProvider({ children }: { children: ReactNode}){
  const [quantidade, setQuantidade] = useState(10);

  const alterarQuantidade = (valor: SetStateAction<number>) => {
    setQuantidade(valor);
  }

  return (
      <QuantidadePorPaginaContext.Provider value={{ quantidade, alterarQuantidade }}>
        {children}
      </QuantidadePorPaginaContext.Provider>
    );
}

export default QuantidadePorPaginaProvider;
