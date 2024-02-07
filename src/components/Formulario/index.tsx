import React, { useState, useEffect } from "react";

import api from "../../services/apis/api-met-museum";

import useRespostaApi from "../../contexts/useRespostaApi";
import useQuantidadePagina from "../../contexts/useQuantidadePagina";

function Formulario() {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [inputComDebounce, setInputComDebounce] = useState("");

  const { alterarDados } = useRespostaApi();
  const { quantidade, alterarQuantidade } = useQuantidadePagina();

  function handlePesquisa(evento: React.ChangeEvent<HTMLInputElement>) {
    setTermoPesquisa(evento.target.value);
  }

  function handleSubmit(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
  }

  function handleChangeQuantity(evento: React.ChangeEvent<HTMLSelectElement>) {
    alterarQuantidade(parseInt(evento.target.value));
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

        <label htmlFor="quantidade">Quantidade</label>
        <select id="quantidade" value={quantidade} onChange={handleChangeQuantity}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </form>
    </>
  )
}

export default Formulario;
