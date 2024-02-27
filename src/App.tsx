// @ts-nocheck
import React from 'react';

import Header from './components/Header';
import Container from './components/Container';

import Router from './routes/router';

import RespostaProvider from './providers/RespostaProvider';
import QuantidadePorPaginaProvider from './providers/QuantidadePorPaginaProvider';
import PaginaProvider from './providers/PaginaProvider';
import DepartamentoProvider from './providers/DepartamentoProvider';

function App() {
  return (
    <Container>
      <QuantidadePorPaginaProvider>
        <RespostaProvider>
          <PaginaProvider>
            <DepartamentoProvider>
              <Header />
              <Router />
            </DepartamentoProvider>
          </PaginaProvider>
        </RespostaProvider>
      </QuantidadePorPaginaProvider>
    </Container>
  );
}

export default App;
