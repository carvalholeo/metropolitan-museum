import { createContext } from "react";

export interface DepartamentoInterface {
  departmentId?: number;
  atualizaDepartamento: Function;
}

const DepartamentoContext = createContext<DepartamentoInterface | undefined>(undefined);

export default DepartamentoContext;
