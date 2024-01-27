import React, { useState, useEffect } from "react";

import api from "../../services/apis/api-met-museum";

interface ObjectResponse {
  objectID: number;
  isHighlight: boolean;
  accessionYear: string;
  primaryImage?: string;
  primaryImageSmall?: string;
  additionalImages?: string[];
  constituents: string[];
  department: string;
  title: string;
}

interface ObjectsIDsResponse {
  total: number;
  objectIDs: number[];
}

function Formulario() {
  const lista: ObjectResponse[] = [];
  const listaVaziaDeObjetos: ObjectsIDsResponse = {
    total: 0,
    objectIDs: []
  }
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [inputComDebounce, setInputComDebounce] = useState("");

  const [resultadoPesquisa, setResultadoPesquisa] = useState(listaVaziaDeObjetos);
  const [resultado, setResultado] = useState(lista);

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

      setResultadoPesquisa(data);
    }

    pesquisarApi();
  }, [inputComDebounce]);

  useEffect(() => {
    if (resultadoPesquisa.objectIDs.length === 0) {
      return;
    }

    async function detalheObjetos() {
      const lista = [];
      for (let index = 0; (index < 5 && index < resultadoPesquisa.total); index++) {
        const id = resultadoPesquisa.objectIDs[index];
        try {
          const resposta = await api.get(`/objects/${id}`);
          lista.push(resposta.data);
        } catch (error) {}
      }

      // let index = 0;
      // while (index < 5 && index < resultadoPesquisa.total) {
      //   const id = resultadoPesquisa.objectIDs[index];
      //   try {
      //     const resposta = await api.get(`/objects/${id}`);
      //     lista.push(resposta.data);
      //   } catch (error) {}

      //   index++;
      // }
      setResultado(lista);
    }

    detalheObjetos();
  }, [resultadoPesquisa]);

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
      {resultado.length > 0 && (
        <ul>
          {resultado.map(objeto => {
            return (
              <li key={objeto.objectID}>
                <img src={objeto.primaryImageSmall} alt={objeto.title} />
                <p>{objeto.title}</p>
              </li>
            );
          })}
        </ul>
      )}

    </>
  )
}

export default Formulario;
