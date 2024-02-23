import React, { useEffect, useState } from "react";

import Imagem from "../Imagem";
import Container from "../Container";

import useRespostaApi from "../../contexts/useRespostaApi";
import useQuantidadePagina from "../../contexts/useQuantidadePagina";
import useAlterarPagina from "../../contexts/useAlterarPagina";

import api from "../../services/apis/api-met-museum";
import style from './style.module.css';

export interface ObjectResponse {
  objectID: number;
  isHighlight: boolean;
  accessionYear: string;
  primaryImage?: string;
  primaryImageSmall?: string;
  additionalImages?: string[];
  measurements?: {
    elementMeasurements: {
      Height: number;
      Width: number
    }
  }[]
  constituents: string[];
  department: string;
  title: string;
  objectEndDate?: string | number;
  artistDisplayName?: string;
}

function Galeria() {
  const listaVaziaDeObjetos: ObjectResponse[] = [];

  const [listaDetalheObjeto, setListaDetalheObjeto] = useState(listaVaziaDeObjetos);
  const [exibeMensagemCarregando, setExibeMensagem] = useState(true);
  const { alterarDados, dados } = useRespostaApi();
  const { quantidade } = useQuantidadePagina()

  const { pagina, mudarPagina } = useAlterarPagina();


  useEffect(() => {
    async function buscarObjetos() {
      const resposta = await api.get('/objects');

      alterarDados(resposta.data);
    }
    buscarObjetos();
  }, []);

  useEffect(() => {
    const objetos = dados.objectIDs;
    if (objetos?.length === 0 && dados.total === 0) {
      return;
    };

    const paginasDisponiveis = Math.ceil(dados.total / quantidade);
    mudarPagina({ paginasTotais: paginasDisponiveis })

    async function buscarDetalheObjeto() {
      setExibeMensagem(true);

      // @ts-ignore
      const indexInicial = (pagina - 1) * quantidade;

      const lista = [];
      // @ts-ignore
      for (let index = indexInicial; (index < quantidade * pagina && index < dados.total); index++) {
        const id = objetos[index];
        try {
          const resposta = await api.get(`/objects/${id}`);
          lista.push(resposta.data);
        } catch (error) {}
      }
      setListaDetalheObjeto(lista);

      setExibeMensagem(false);
    }

    buscarDetalheObjeto();
  }, [dados, quantidade, pagina]);

  useEffect(() => {
    mudarPagina({ paginaAtual: 1 });
  }, [dados])

  return (
    <Container>
      <div className={style.grade}>
        {!exibeMensagemCarregando && listaDetalheObjeto.map(objeto => {
          return (
            <a key={objeto.objectID} href={'/detalhes/' + objeto.objectID}>
              <Imagem caminho={objeto.primaryImageSmall} texto={objeto.title} />
            </a>
          );
        })}
      </div>
      {exibeMensagemCarregando && (
        <h2>Carregando imagens</h2>
      )}
    </Container>
  );
}

export default Galeria;
