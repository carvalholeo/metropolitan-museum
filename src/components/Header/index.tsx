import React from 'react';

import Container from '../Container';
import Formulario from '../Formulario';

function Header() {
  return (
    <Container>
      <header>
        <nav>
          <ul>
            <li><a href="#">Quadros novos</a></li>
            <li><a href="#">Quadros velhos</a></li>
            <li><a href="#">Quadros da era dos Astecas</a></li>
          </ul>
        </nav>
      </header>
      <Formulario />
    </Container>
  );
}

export default Header;
