import { useState, ReactNode, SetStateAction } from "react";
import PaginaContext from "./PaginaContext";

function PaginaProvider({ children }: { children: ReactNode}){
  const [pagina, setPagina] = useState(10);

  const mudarPagina = (valor: SetStateAction<number>) => {
    setPagina(valor);
  }

  return (
      <PaginaContext.Provider value={{ pagina, mudarPagina }}>
        {children}
      </PaginaContext.Provider>
    );
}

export default PaginaProvider;
