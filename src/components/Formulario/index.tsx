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
  const [pesquisa, setPesquisa] = useState("");
  const [executarPesquisa, setExecutarPesquisa] = useState("");

  const [resultadoPesquisa, setResultadoPesquisa] = useState(listaVaziaDeObjetos);
  const [resultado, setResultado] = useState(lista);

  function handlePesquisa(evento: React.ChangeEvent<HTMLInputElement>) {
    setPesquisa(evento.target.value);
  }

  function handleSubmit(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setExecutarPesquisa(pesquisa);
  }

  useEffect(() => {
    if (executarPesquisa.length === 0) {
      return;
    }

    async function pesquisarApi() {
      const { data } = await api.get('search', {
        params : {
          q: executarPesquisa
        }
      });

      setResultadoPesquisa(data);
    }

    pesquisarApi();
  }, [executarPesquisa]);

  useEffect(() => {
    if (resultadoPesquisa.objectIDs.length === 0) {
      return;
    }

    async function detalheObjetos() {
      const lista = [];
      for (let index = 0; index < 5; index++) {
        const id = resultadoPesquisa.objectIDs[index];
        const resposta = await api.get(`/objects/${id}`);
        lista.push(resposta.data);
      }
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
          value={pesquisa}
          placeholder="Pesquise por quadros, moedas, esculturas e artes em geral"
          onChange={handlePesquisa}
        />
        <button type="submit">Pesquisar</button>
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
