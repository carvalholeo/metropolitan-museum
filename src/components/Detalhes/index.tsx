import React from "react";

import Container from "../Container";
import Imagem from "../Imagem";
import detalhes from './detalhes.json'

function Detalhes() {
  return (
    <Container>
      <Imagem caminho={detalhes.primaryImageSmall} texto={detalhes.title} />
      <table border={1}>
        <tr>
          <thead>
            <tr>
              <th>Título</th>
              <th>Artista</th>
              <th>Data de publicação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{detalhes.title}</td>
              <td>{detalhes.artistDisplayName}</td>
              <td>{detalhes.objectEndDate}</td>
            </tr>
          </tbody>
        </tr>
        <tr>
          <thead>
            <tr>
              <th>Dimensões do objeto</th>
              <th>Departamento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{detalhes.measurements[0].elementMeasurements.Height} x {detalhes.measurements[0].elementMeasurements.Width} cm</td>
              <td>{detalhes.department}</td>
            </tr>
          </tbody>
        </tr>
      </table>
    </Container>
  );
}

export default Detalhes;
