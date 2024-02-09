// @ts-nocheck
import React from 'react';

import Header from './components/Header';
import Container from './components/Container';
import Galeria from './components/Galeria';

import ErrorBoundary from './components/ErrorBoundary';

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
            <ErrorBoundary fallback={<p>Deu merda na galeria</p>}>
              <Galeria />
            </ErrorBoundary>
          </PaginaProvider>
        </RespostaProvider>
      </QuantidadePorPaginaProvider>
    </Container>
  );
}

export default App;
