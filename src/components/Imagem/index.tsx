import React from "react";

interface ImagemProps {
  caminho: string,
  texto?: string,
}

function Imagem({ caminho, texto }: ImagemProps) {
  return (
    <img
      src={caminho}
      alt={texto}
    />
  );
}

export default Imagem;
