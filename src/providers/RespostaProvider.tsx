import React from 'react';

import RespostaContext from './RespostaContext';

import { RespostaInterface } from './RespostaContext';

interface ReactProps {
  children: React.ReactNode;
}

function RespostaProvider(props: ReactProps) {
  const resposta: RespostaInterface = {
    total: 0,
    objectIDs: []
  };
  const [dados, setDados] = React.useState(resposta);

  const alterarDados = (info: React.SetStateAction<RespostaInterface>) => {
    setDados(info);

    console.log(info);
  }

  return (
    <RespostaContext.Provider value={{ dados, alterarDados }}>
      {props.children}
    </RespostaContext.Provider>
  );
}

export default RespostaProvider;
