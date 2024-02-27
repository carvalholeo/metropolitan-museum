import { useState, ReactNode } from "react";
import DepartamentoContext from "./DepartamentoContext";

function DepartamentoProvider({children}: { children: ReactNode}) {
  const [departmentId, setDepartment] = useState<number | undefined>();

  function atualizaDepartamento(valor: number) {
    setDepartment(valor);
  }

  return (
    <DepartamentoContext.Provider value={{ departmentId, atualizaDepartamento}}>
      {children}
    </DepartamentoContext.Provider>
  );
}

export default DepartamentoProvider;