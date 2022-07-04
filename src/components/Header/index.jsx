import { NavLink } from 'react-router-dom';

import { Container, Content, Favoritos, Logo } from './style';

export function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <NavLink to="/">Filmex</NavLink>
        </Logo>
        <Favoritos>
          <NavLink to="/favorito">Meus filmes</NavLink>
        </Favoritos>
      </Content>
    </Container>
  )
}