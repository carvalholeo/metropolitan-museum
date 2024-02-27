import React, { useEffect, useState } from 'react';

import Container from '../Container';
import Formulario from '../Formulario';

import api from '../../services/apis/api-met-museum';

import useDepartamento from '../../contexts/useDepartamento';

interface Menu {
  departments: {
    departmentId: number;
    displayName: string;
  }[];
}

function Header() {
  const inicial: Menu = {
    departments: [
      {
        departmentId: 0,
        displayName: ''
      }
    ]
  }
  const [menu, setMenu] = useState(inicial);

  const { atualizaDepartamento } = useDepartamento();

  useEffect(() => {
    async function buscaMenu() {
      const { data } = await api.get('departments');

      setMenu(data);
    }
    buscaMenu();
  }, []);

  function gerenciaClick(evento: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    evento.preventDefault();

    atualizaDepartamento(evento.currentTarget.dataset.departamento);
  }

  return (
    <Container>
      <header>
        <nav>
          <ul>
            {menu.departments.length > 0 &&
              menu.departments.map(departamento => {
                return (
                  <li key={departamento.displayName + departamento.departmentId}>
                    <a
                      onClick={gerenciaClick}
                      data-departamento={departamento.departmentId}
                      href='#'
                    >
                      {departamento.displayName}
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </header>
      <Formulario />
    </Container>
  );
}

export default Header;
