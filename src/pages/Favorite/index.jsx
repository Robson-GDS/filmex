import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export function Favorite() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@filmex")
    setMovies(JSON.parse(myList) || [])
  }, [])

  return (
    <Container>
      <Content>
        <h1>Meus Filmes</h1>

        {movies.length === 0 && <h3>Ops, não temos filmes salvos no momento!</h3>}

        <ul>
          {movies.map((item) => {
            return (
              <li key={item.id}>
                <span>{item.title}</span>
                <div>
                  <Link to={`/movie/${item.id}`}>Ver detalhes</Link>
                  <button >Excluir</button>
                </div>
              </li>
            )
          })}
        </ul>
      </Content>
    </Container>
  )
}