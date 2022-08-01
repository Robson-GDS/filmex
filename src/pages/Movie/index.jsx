import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import api from "../../services/api";

import {
  AreaButtons,
  Evaluation,
  ImgBackdrop,
  MovieInfo,
  MovieTitle,
} from "./style";

export function Movie() {
  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(true)

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadMovie() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "215676f43605ace1c8ac8237af04ecf1",
          language: "pt-BR",
        }
      })
      .then((response) => {
        setMovie(response.data)
        setLoading(false)
      })
      .catch(() => {
        console.log("Filme nao encontrado!")
        navigate("/", { replace: true });
        return;
      })
    }

    loadMovie();

    return () => {
      console.log("Componente foi desmontado")
    }
  }, [navigate, id])

  function saveMovie() {
    const myList = localStorage.getItem("@filmex");

    let savedMovies = JSON.parse(myList) || [];

    const hasMovie = savedMovies.some((savedMovie) => savedMovie.id === movie.id)

    if(hasMovie) {
      alert("Esse filme já esta na lista");
      return;
    }

    savedMovies.push(movie);
    localStorage.setItem("@filmex", JSON.stringify(savedMovies));
    alert("Filme salvo com sucesso")
  }

  if(loading) {
    return (
      <h1> Carregando detalhes do filme...</h1>
    )
  }

  return (
    <MovieInfo>
      <MovieTitle>{movie.title}</MovieTitle>
      <ImgBackdrop src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title}/>

      <h3>Sinopse</h3>
      <span>{movie.overview}</span>
      
      <AreaButtons>
        <Evaluation>Avaliação: {movie.vote_average.toFixed(1)}</Evaluation>

        <button onClick={saveMovie}>Salvar</button>
        <button>
          <a target="blank" href={`https://youtube.com/results?search_query=${movie.title} Trailer`}> 
            Acessar trailer 
          </a>
        </button>
      </AreaButtons>
    </MovieInfo>
  )
}