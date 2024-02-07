import React from 'react';

import Header from './components/Header';
import Container from './components/Container';
import Galeria from './components/Galeria';

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
            <Galeria />
          </PaginaProvider>
        </RespostaProvider>
      </QuantidadePorPaginaProvider>
    </Container>
  );
}

export default App;
