import React, { useState } from "react";

function Formulario() {
  const [idade, setIdade] = useState(0);

  function mudarIdade(evento: React.SyntheticEvent) {
    setIdade(idade + 1);
    console.log(idade)
  }

  return (
    <form>
      <button type="button" onClick={mudarIdade}>O que acontece?</button>
      Idade: {idade}
    </form>
  )
}

export default Formulario;
