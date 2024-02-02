import React, { useState, useEffect, useContext } from "react";

import api from "../../services/apis/api-met-museum";
import RespostaContext from "../../providers/RespostaContext";

function Formulario() {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [inputComDebounce, setInputComDebounce] = useState("");

  const { alterarDados } = useContext(RespostaContext);

  function handlePesquisa(evento: React.ChangeEvent<HTMLInputElement>) {
    setTermoPesquisa(evento.target.value);
  }

  function handleSubmit(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
  }

  useEffect(() => {
    const executaDepoisDeUmTempo = setTimeout(() => {
      setInputComDebounce(termoPesquisa);
    }, 2000);

    return () => clearTimeout(executaDepoisDeUmTempo);
  }, [termoPesquisa]);

  useEffect(() => {
    if (inputComDebounce.length === 0) {
      return;
    }

    async function pesquisarApi() {
      const { data } = await api.get('search', {
        params: {
          q: inputComDebounce
        }
      });
      alterarDados(data);
    }

    pesquisarApi();
  }, [inputComDebounce]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pesquisa">Pesquisar</label>
        <input
          type="search"
          name="pesquisa"
          id="pesquisa"
          value={termoPesquisa}
          placeholder="Pesquise por quadros, moedas, esculturas e artes em geral"
          onChange={handlePesquisa}
        />
      </form>
    </>
  )
}

export default Formulario;
