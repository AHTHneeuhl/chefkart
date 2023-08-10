import styled from "styled-components";

export const Main = styled.main`
  padding: 0 2.5rem;

  @media screen and (max-width: 1024px) {
    padding: 0 2rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media screen and (max-width: 425px) {
    padding: 0 1rem;
  }
`;
