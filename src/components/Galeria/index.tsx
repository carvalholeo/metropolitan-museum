import React, { useEffect, useState } from "react";

import Imagem from "../Imagem";
import Container from "../Container";

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

  const [listaObjetos, setListaObjetos] = useState([]);
  const [listaDetalheObjeto, setListaDetalheObjeto] = useState(listaVaziaDeObjetos);

  useEffect(() => {
    async function buscarObjetos() {
      const resposta = await api.get('/objects');
      setListaObjetos(resposta.data.objectIDs);
    }

    buscarObjetos();
  }, []);

  useEffect(() =>{
    if (listaObjetos.length === 0) return;

    async function buscarDetalheObjeto() {
      const lista = [];
      for (let index = 100000; index < 100010; index++) {
        const id = listaObjetos[index];
        const resposta = await api.get(`/objects/${id}`);
        lista.push(resposta.data);
      }
      setListaDetalheObjeto(lista);
    }

    buscarDetalheObjeto();
  }, [listaObjetos]);

  return (
    <Container>
      <div className={style.grade}>
        {listaDetalheObjeto.map(objeto => {
          return (
            <Imagem key={objeto.objectID} caminho={objeto.primaryImageSmall} texto={objeto.title} />
          );
        })}
      </div>
    </Container>
  );
}

export default Galeria;
