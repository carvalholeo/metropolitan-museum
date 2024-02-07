import React, { useEffect, useState } from "react";

import Imagem from "../Imagem";
import Container from "../Container";

import useRespostaApi from "../../contexts/useRespostaApi";
import useQuantidadePagina from "../../contexts/useQuantidadePagina";

import api from "../../services/apis/api-met-museum";
import style from './style.module.css';

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

function Galeria() {
  const listaVaziaDeObjetos: ObjectResponse[] = [];

  const [listaDetalheObjeto, setListaDetalheObjeto] = useState(listaVaziaDeObjetos);
  const [exibeMensagemCarregando, setExibeMensagem] = useState(true);
  const { alterarDados, dados } = useRespostaApi();
  const { quantidade } = useQuantidadePagina()

  useEffect(() => {
    async function buscarObjetos() {
      const resposta = await api.get('/objects');

      alterarDados(resposta.data);
    }
    buscarObjetos();
  }, []);

  useEffect(() => {
    const objetos = dados.objectIDs;
    if (objetos.length === 0) return;

    async function buscarDetalheObjeto() {
      setExibeMensagem(true);

      const lista = [];
      for (let index = 0; (index < quantidade && index < dados.total); index++) {
        const id = objetos[index];
        const resposta = await api.get(`/objects/${id}`);
        lista.push(resposta.data);
      }
      setListaDetalheObjeto(lista);

      setExibeMensagem(false);
    }

    buscarDetalheObjeto();
  }, [dados, quantidade]);

  return (
    <Container>
      <div className={style.grade}>
        {!exibeMensagemCarregando && listaDetalheObjeto.map(objeto => {
          return (
            <Imagem key={objeto.objectID} caminho={objeto.primaryImageSmall} texto={objeto.title} />
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
