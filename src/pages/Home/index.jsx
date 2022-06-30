import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import api from "../../services/api";
import { limitTitle } from "../../services/limitTitle";

import { Container, ListaFilmes, Loading} from "./styles";


// URL DA API: /movie/now_playing?api_key=215676f43605ace1c8ac8237af04ecf1
export function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("/movie/now_playing", {
        params: {
          api_key: "215676f43605ace1c8ac8237af04ecf1",
          language: "pt-BR",
          page: 1,
        }
      })

      setFilmes(response.data.results.slice(0, 6))
      setLoading(false);
    }

    loadFilmes();
  }, [])

  if(loading) {
    return (
      <Loading>
        <h2>Carregando lista de filmes...</h2>
      </Loading>
    )
  }

  return (
    <Container>
      <ListaFilmes>
          {filmes.map(filme => (
              <article key={filme.id}>
                <strong>{limitTitle(filme.title)}</strong>
                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                <NavLink to={`/filme/${filme.id}`}>Ver mais</NavLink>
              </article>
          ))}
      </ListaFilmes>
    </Container>
  )
}