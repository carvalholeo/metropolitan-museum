import React, { useState, useEffect } from "react";

import apiMetMuseum from '../../services/apis/api-met-museum';

function Formulario() {
  const [idade, setIdade] = useState(27);

  // equivalente ao componentWillMount
  useEffect(function() {
    apiMetMuseum.get('objects/436121')
      .then(console.log)
  }, []);

  // equivalente à de atualização
  useEffect(() => {
    console.log('Executa a cada alteração de idade');
    console.log(idade);
  }, [idade]);


  // equivalente ao componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('Executa quando o componente é desmontado');
    }
  }, []);

  function mudarIdade(evento: React.SyntheticEvent) {
    setIdade(idade + 1);
  }

  return (
    <form>
      <button type="button" onClick={mudarIdade}>O que acontece?</button>
      Idade: {idade}
    </form>
  )
}

export default Formulario;
