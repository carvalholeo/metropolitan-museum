import React, { useEffect, useState } from "react";
import { useParams, redirect, redirectDocument } from "react-router-dom";

import Container from "../Container";
import Imagem from "../Imagem";

import api from "../../services/apis/api-met-museum";

import { ObjectResponse } from '../Galeria';


function Detalhes() {
  const respostaInicial: ObjectResponse = {
    accessionYear: '',
    constituents: [],
    department: '',
    isHighlight: false,
    measurements: [{ elementMeasurements: { Height: 0, Width: 0 } }],
    objectID: 1,
    title: '',
    additionalImages: [],
    artistDisplayName: '',
    objectEndDate: '',
    primaryImage: '',
    primaryImageSmall: ''
  }
  const { object_id } = useParams();
  const [respostaApi, setRespostaApi] = useState(respostaInicial);

  useEffect(() => {
    const id = parseInt(object_id as unknown as string);

    buscarApi(id);
  }, [object_id]);

  useEffect(() => {
    console.log(respostaApi)
  }, [respostaApi])

  async function buscarApi(id: any) {
    if (Number.isNaN(id) || !id || id < 1) {
      window.location.href = '/'
      return;
    }

    const { data } = await api.get(`/objects/${object_id}`);
    setRespostaApi(data);
  }

  return (
    <Container>
      <Container>
        <Imagem caminho={respostaApi.primaryImage} texto={respostaApi.title} />
      </Container>
      <table border={1}>
        <thead>
          <tr>
            <th>Título</th>
            <th>Artista</th>
            <th>Data de publicação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{respostaApi.title}</td>
            <td>{respostaApi.artistDisplayName}</td>
            <td>{respostaApi.objectEndDate}</td>
          </tr>
        </tbody>

        <thead>
          <tr>
            <th>Dimensões do objeto</th>
            <th>Departamento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {
              Array.isArray(respostaApi.measurements) ? (
                <td>{respostaApi.measurements[0]?.elementMeasurements?.Height} x {respostaApi.measurements[0]?.elementMeasurements?.Width} cm</td>
              ) : (
                <td>Sem medidas</td>
              )
            }
            <td>{respostaApi.department}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default Detalhes;
