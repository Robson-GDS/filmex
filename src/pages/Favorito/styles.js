import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

`;

export const Content = styled.div`
  h1 {
    padding: 24px;
    text-align: center;
  }

  h3 {
    text-align: center;
  }

  span {
    font-size: 18px;

    @media (max-width: 750px) {
      margin-bottom: 10px;
    }
  }

  li {
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    @media (max-width: 750px) {
      flex-direction: column;
    }
  }

  div {

    a {
      text-decoration: none;
      margin-right: 10px;
      background-color: var(--btn-detalhes-filmes);
      color: var(--white-text);
      padding: 10px 20px;
      border-radius: 5px;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }

    }

    button {
      padding: 11px 20px;
      border-radius: 5px;
      background-color: var(--btn-excluir);
      color: var(--white-text);
      text-transform: uppercase;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`