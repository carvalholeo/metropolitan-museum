import { useState, ReactNode } from "react";
import PaginaContext from "./PaginaContext";

import { PaginaInterface } from "./PaginaContext";


function PaginaProvider({ children }: { children: ReactNode}){
  const [pagina, setPagina] = useState(1);
  const [paginasTotais, setPaginasTotais] = useState(1);

  const mudarPagina = (valor: PaginaInterface) => {
    if (valor.paginaAtual) {
      setPagina(valor.paginaAtual);
    }

    if (valor.paginasTotais) {
      setPaginasTotais(valor.paginasTotais);
    }
  }

  return (
      <PaginaContext.Provider value={{ pagina, paginasTotais, mudarPagina }}>
        {children}
      </PaginaContext.Provider>
    );
}

export default PaginaProvider;
