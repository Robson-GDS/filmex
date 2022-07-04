import { NavLink } from 'react-router-dom';

import { Container, Content, Favorites, Logo } from './style';

export function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <NavLink to="/">Filmex</NavLink>
        </Logo>
        <Favorites>
          <NavLink to="/favorito">Meus filmes</NavLink>
        </Favorites>
      </Content>
    </Container>
  )
}