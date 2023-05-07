import styled from "styled-components";

export const InfiniteScrollContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin-top: 5%;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 20px;

  @media (max-width: 500px) {
    margin-top: 10%;
  }
`;
