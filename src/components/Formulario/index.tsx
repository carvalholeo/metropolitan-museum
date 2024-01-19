import React, { useState, useEffect } from "react";

function Formulario() {
  const [idade, setIdade] = useState(27);

  // equivalente ao componentWillMount
  useEffect(function() {
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
