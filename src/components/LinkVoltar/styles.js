import styled from "styled-components";

export const Content = styled.div`
  margin-top: 20px;

  a {
    text-decoration: none;
    color: var(--white-text);
    background-color: var(--btn-color);
    padding: 10px 20px;
    border-radius: 4px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`