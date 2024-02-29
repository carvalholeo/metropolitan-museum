import { ReactNode, SetStateAction, useState } from 'react';

import RespostaContext from './RespostaContext';

import { RespostaInterface } from './RespostaContext';

interface ReactProps {
  children: ReactNode;
}

function RespostaProvider(props: ReactProps) {
  const resposta: RespostaInterface = {
    total: 0,
    objectIDs: []
  };
  const [dados, setDados] = useState(resposta);

  const alterarDados = (info: SetStateAction<RespostaInterface>) => {
    setDados(info);
  }

  return (
    <RespostaContext.Provider value={{ dados, alterarDados }}>
      {props.children}
    </RespostaContext.Provider>
  );
}

export default RespostaProvider;
