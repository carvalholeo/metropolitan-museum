// @ts-nocheck
import React from 'react';

import Header from './components/Header';
import Container from './components/Container';

import Router from './routes/router';

import RespostaProvider from './providers/RespostaProvider';
import QuantidadePorPaginaProvider from './providers/QuantidadePorPaginaProvider';
import PaginaProvider from './providers/PaginaProvider';

function App() {
  return (
    <Container>
      <QuantidadePorPaginaProvider>
        <RespostaProvider>
          <PaginaProvider>
            <Header />
            <Router />
          </PaginaProvider>
        </RespostaProvider>
      </QuantidadePorPaginaProvider>
    </Container>
  );
}

export default App;
