import React from "react";

export interface RespostaInterface {
  total: number;
  objectIDs: number[];
}

interface DadosInterface {
  dados: RespostaInterface;
  alterarDados: (value: React.SetStateAction<RespostaInterface>) => void;
}

const valoresPadrao = {
  dados: {
    total: 0,
    objectIDs: []
  },
  alterarDados: (_: unknown) => { return }
}

const RespostaContext = React.createContext<DadosInterface>(valoresPadrao);

export default RespostaContext;
