// @ts-nocheck
import { useState, useEffect, ChangeEvent, FormEvent, MouseEvent } from "react";

import api from "../../services/apis/api-met-museum";
import css from './style.module.css';

import useRespostaApi from "../../contexts/useRespostaApi";
import useQuantidadePagina from "../../contexts/useQuantidadePagina";
import useAlterarPagina from "../../contexts/useAlterarPagina";
import useDepartamento from "../../contexts/useDepartamento";

function Formulario() {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [inputComDebounce, setInputComDebounce] = useState("");

  const { alterarDados } = useRespostaApi();
  const { quantidade, alterarQuantidade } = useQuantidadePagina();
  const { mudarPagina, pagina, paginasTotais } = useAlterarPagina();
  const { departmentId } = useDepartamento()

  function handlePesquisa(evento: ChangeEvent<HTMLInputElement>) {
    setTermoPesquisa(evento.target.value);
  }

  function handleSubmit(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
  }

  function handleChangeQuantity(evento: ChangeEvent<HTMLSelectElement>) {
    alterarQuantidade(parseInt(evento.target.value));
  }

  function handleNextPage(evento: MouseEvent<HTMLButtonElement, MouseEvent>) {
    mudarPagina({ paginaAtual: pagina + 1 });
  }

  function handlePreviousPage(evento: MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (pagina > 1) {
      mudarPagina({ paginaAtual: pagina - 1 });
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
          q: inputComDebounce,
          departmentsId: departmentId
        }
      });
      alterarDados(data);
    }

    pesquisarApi();
  }, [inputComDebounce, departmentId]);

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
        <button className={css.input} onClick={handlePreviousPage} disabled={pagina <= 1}>{'<'} Anterior </button>
        <button className={css.input} onClick={handleNextPage} disabled={pagina >= paginasTotais}>Próxima &gt;</button>
        <span>Página {pagina} de {paginasTotais}</span>
      </form>
    </>
  )
}

export default Formulario;
