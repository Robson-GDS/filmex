import styled from "styled-components";

export const Container = styled.div`

  background-color: #dcdcdc;
`;

export const ListaFilmes = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  img {
    max-height: 31.25rem;
    border-radius: 0.31rem;

    @media (max-width: 800px) {
      max-height: 40.25rem;
    }
  }

  strong {
    margin-bottom: 0.87rem;
    display: block;
    text-align: center;
    font-size: 1.125rem;

    @media (max-width: 1200px) {
      font-size: 0.81rem;
    }

    @media (max-width: 550px) {
      font-size: 1.125rem;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--btn-color);
    padding: 0.62rem 0;
    text-decoration: none;
    color: var(--white-text);
    margin-top: 0.62rem;
    border-radius: 0.31rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 6rem);
`;