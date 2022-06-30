import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

import api from '../../services/api';

import { Container, AreaButtons } from './styles';

export function Filme() {
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true)

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "215676f43605ace1c8ac8237af04ecf1",
          language: "pt-BR",
        }
      })
      .then((response) => {
        setFilme(response.data);
        setLoading(false);
      })
      .catch(() => {
        toast.warn("Filme nao encontrado")
        navigate("/", { replace: true });
        return;
      })
    }

    loadFilme()
  }, [navigate, id])

  function saveMovie() {
    const minhaLista = localStorage.getItem("@primeflix");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

    if(hasFilme) {
      toast.warn("Esse filme já esta na lista");
      return;
    }

    filmesSalvos.push(filme);

    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso!")
  }

  if(loading) {
    return (
      <div>
        <h1>Carregando detalhes do filme...</h1>
      </div>
    )
  }

  return (
    <Container>
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>

      <AreaButtons>
        <strong>Avaliação: {filme.vote_average}</strong>
        <button onClick={saveMovie}>salvar</button>
        <button>
          <a target="blank" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}> 
            Acessar trailer 
          </a>
        </button>
      </AreaButtons>
    </Container>
  )
}