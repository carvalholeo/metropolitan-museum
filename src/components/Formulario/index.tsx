import React, { useState, useEffect } from "react";

import api from "../../services/apis/api-met-museum";
import css from './style.module.css';

import useRespostaApi from "../../contexts/useRespostaApi";
import useQuantidadePagina from "../../contexts/useQuantidadePagina";
import useAlterarPagina from "../../contexts/useAlterarPagina";

function Formulario() {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [inputComDebounce, setInputComDebounce] = useState("");

  const { alterarDados } = useRespostaApi();
  const { quantidade, alterarQuantidade } = useQuantidadePagina();
  const { mudarPagina, pagina } = useAlterarPagina();

  function handlePesquisa(evento: React.ChangeEvent<HTMLInputElement>) {
    setTermoPesquisa(evento.target.value);
  }

  function handleSubmit(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
  }

  function handleChangeQuantity(evento: React.ChangeEvent<HTMLSelectElement>) {
    alterarQuantidade(parseInt(evento.target.value));
  }

  function handleNextPage(evento: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    mudarPagina(pagina + 1);
  }

  function handlePreviousPage(evento: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (pagina > 1) {
      mudarPagina(pagina - 1);
    }
  }

  useEffect(() => {
    const tempoLimite = 2000;

    const executaDepoisDeUmTempo = setTimeout(() => {
      setInputComDebounce(termoPesquisa);
    }, tempoLimite);

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
      <form onSubmit={handleSubmit} className={css.form}>
        <label htmlFor="pesquisa" className={css.input}>Pesquisar</label>
        <input
          type="search"
          name="pesquisa"
          id="pesquisa"
          value={termoPesquisa}
          placeholder="Pesquise por quadros, moedas, esculturas e artes em geral"
          onChange={handlePesquisa}
          className={css.input}
        />

        <label htmlFor="quantidade" className={css.input}>Quantidade</label>
        <select id="quantidade" className={css.input} value={quantidade} onChange={handleChangeQuantity}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <button className={css.input} onClick={handlePreviousPage} disabled={pagina <= 1}> &lt; Anterior </button>
        <button className={css.input} onClick={handleNextPage}>Próxima &gt;</button>
        <span>Página atual: {pagina}</span>
      </form>
    </>
  )
}

export default Formulario;
