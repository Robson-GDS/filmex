import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #000;
  height: 6rem;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: var(--black-theme);
  height: 6rem;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const Logo = styled.h1`
  font-size: 1.875rem;
  
  a {
    color: var(--white-text);
  }
`;

export const Favoritos = styled.a`
  background-color: var(--btn-color);
  padding: 0.62rem 1.25rem;
  border-radius: 5px;
  
  a {
    color: var(--white-text);
  }
`;