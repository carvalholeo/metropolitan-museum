import React from 'react';

import Header from './components/Header';
import Container from './components/Container';
import Galeria from './components/Galeria';

import RespostaProvider from './providers/RespostaProvider';

function App() {
  return (
    <Container>
      <RespostaProvider>
        <Header />
        <Galeria />
      </RespostaProvider>
    </Container>
  );
}

export default App;
