import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--black-theme);
  height: 6rem;
`

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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
`

export const Logo = styled.h1`
  font-size: 3rem;

  a {
    color: var(--white-text);
  }
`

export const Favorites = styled.a`
  background-color: var(--btn-color);
  padding: 0.62rem 1.25rem;
  border-radius: 5px;

  a {
    color: var(--white-text);
  }
`