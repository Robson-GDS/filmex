import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <>
      <h1>pagina não encontrada!</h1>
      <Link to="/">Voltar!</Link>
    </>
  )
}