import { useEffect, useState } from 'react';
import { toast } from "react-toastify";

import { Link } from 'react-router-dom';
import { LinkVoltar } from '../../components/LinkVoltar';

import { Container, Content } from './styles';

export function Favoritos() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix")
    setFilmes(JSON.parse(minhaLista) || [])
  }, [])

  function handleDeleteMovie(id) {
    let filterMovie = filmes.filter(item => item.id !== id)

    setFilmes(filterMovie)
    localStorage.setItem("@primeflix", JSON.stringify(filterMovie))
    toast.success('Filme excluido com sucesso')
  }

  return (
    <Container>
      <LinkVoltar />

      <Content>

        <h1>Meus filmes</h1>

        {filmes.length === 0 && <h3>Ops, não temos filmes salvos no momento!</h3>}

        <ul>
          {filmes.map((item) => {
            return (
              <li key={item.id}>
                <span>{item.title}</span>
                <div>
                  <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                  <button onClick={() => handleDeleteMovie(item.id)}>Excluir</button>
                </div>
              </li>
            )
          })}
        </ul>
      </Content>
    </Container>
  )
}