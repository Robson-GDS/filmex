import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";

export function Movie() {
  const { id } = useParams();

  useEffect(() => {
    async function loadMovie() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "215676f43605ace1c8ac8237af04ecf1",
          language: "pt-BR",
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch(() => {
        console.log("Filme nao encontrado!")
      })
    }

    loadMovie();
  }, [])

  return (
    <h1>Acessando filme {id}</h1>
  )
}