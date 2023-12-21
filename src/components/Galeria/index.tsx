import React from "react";

import Imagem from "../Imagem";

function Galeria() {
  const listaImages = [
    {
      caminho: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      texto: 'Melhor descrição'
    },
    {
      caminho: 'https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      texto: 'Melhor descrição'
    },
    {
      caminho: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      texto: 'Melhor descrição'
    },
  ];
  return (
    <div>
      <div>
        <div><Imagem caminho={listaImages[0].caminho} texto={listaImages[0].texto} /></div>
        <div><Imagem caminho={listaImages[1].caminho} texto={listaImages[1].texto} /></div>
        <div><Imagem caminho={listaImages[2].caminho} texto={listaImages[2].texto} /></div>
      </div>
    </div>
  );
}

export default Galeria;
