import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

import api from "../../services/api"

export function Home() {
  const [movies, setMovies] = useState([])

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
    }

    loadMovies();
  }, [])

  return (
    <div>
      <div>
        {movies.map(movie => (
          <article key={movie.id}>
            <strong>{movie.title}</strong>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/>
            <NavLink to={`/movie/${movie.id}`}>Ver mais</NavLink>
          </article>
        ))}
      </div>
    </div>
  )
}