import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  h1 {
    padding: 1rem 0;
    text-align: center;
    font-size: 2.125rem;
  }

  img {
    border-radius: 0.31rem;
  }

  h3 {
    padding: 1rem 0;
    text-align: center;
    font-size: 1.125rem;
  }
`;

export const AreaButtons = styled.div`
  padding: 1rem 0;

  strong {
    display: inline-block;
    position: relative;
  }

  a {
    text-decoration: none;
    color: var(--white-text);
  }

  button {
    margin-left: 2rem;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: var(--btn-color);
    color: var(--white-text);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;