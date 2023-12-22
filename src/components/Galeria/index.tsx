import React from "react";

import Imagem from "../Imagem";
import Container from "../Container";

function Galeria() {
  const listaImages = [
    {
      caminho: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      texto: 'Melhor descrição',
      ehPraRenderizar: true
    },
    {
      caminho: 'https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      texto: 'Melhor descrição',
      ehPraRenderizar: true
    },
    {
      caminho: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      texto: 'Melhor descrição',
      ehPraRenderizar: true
    },
  ];
  return (
    <Container>
      <div>
        {listaImages.map(objeto => {
          const key = Math.random() * 10;

          return (objeto.ehPraRenderizar &&
            <div key={key} ><Imagem caminho={objeto.caminho} texto={objeto.texto} /></div>
          );
        })}
      </div>
    </Container>
  );
}

export default Galeria;
