import { createContext ,SetStateAction} from "react";

export interface RespostaInterface {
  total: number;
  objectIDs: number[];
}

interface DadosInterface {
  dados: RespostaInterface;
  alterarDados: (value: SetStateAction<RespostaInterface>) => void;
}

const valoresPadrao = {
  dados: {
    total: 0,
    objectIDs: []
  },
  alterarDados: (_: unknown) => { return }
}

const RespostaContext = createContext<DadosInterface>(valoresPadrao);

export default RespostaContext;
