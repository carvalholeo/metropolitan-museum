import React from "react";

function Imagem(props: any) {
  return (
    <img
      src={props.caminho}
      alt={props.texto}
    />
  );
}

export default Imagem;
