import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

import api from "../../services/api"

import { Container, MovieList, Loading } from "./style"

export function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadMovies() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "215676f43605ace1c8ac8237af04ecf1",
          language: "pt-BR",
          page: 1,
        }
      })

      setMovies(response.data.results.slice(0, 6))
      setLoading(false)
    }

    loadMovies();
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
      <MovieList>
        {movies.map(movie => (
          <article key={movie.id}>
            <strong>{movie.title}</strong>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/>
            <NavLink to={`/movie/${movie.id}`}>Ver mais</NavLink>
          </article>
        ))}
      </MovieList>
    </Container>
  )
}