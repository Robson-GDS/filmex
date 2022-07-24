import { NavLink } from "react-router-dom"

import styled from "styled-components"

export const Container = styled.div`
  background-color: #dcdcdc;
`

export const MovieList = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }

  strong {
    margin-bottom: 0.87rem;
    text-align: center;
    font-size: 1.125rem;

    @media (max-width: 1200px) {
      font-size: 0.81rem;
    }

    @media (max-width: 550px) {
      font-size: 1.125rem;
    }
  }

  img {
    max-height: 31.25rem;

    @media (max-width: 1050px) {
      max-height: 25rem;
    }

    @media (max-width: 900px) {
      max-height: 23.125rem;
    }

    @media (max-width: 800px) {
      max-height: 500px;
    }

    @media (max-width: 550px) {
      max-height: 40.62rem
    }
  }
`

export const Navigate = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--btn-color);
  padding: 9px 0;
  text-decoration: none;
  color: var(--white-text);
  margin-top: 9px;
  border-radius: 4px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 6rem);
`