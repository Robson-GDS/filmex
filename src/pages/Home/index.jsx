import { useEffect, useState } from "react"

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
    }

    loadMovies();
  }, [])

  return (
    <h1>Pagina Home</h1>
  )
}