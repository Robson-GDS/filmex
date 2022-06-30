import { NavLink } from 'react-router-dom';

import { HeaderContainer, HeaderContent, Logo, Favoritos } from './style';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <NavLink to="/">Prime Flix</NavLink>
        </Logo>
        <Favoritos>
          <NavLink to="/favorito">Meus filmes</NavLink>
        </Favoritos>
      </HeaderContent>
    </HeaderContainer>
  )
}