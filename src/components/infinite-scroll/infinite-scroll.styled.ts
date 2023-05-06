import styled from "styled-components";

export const InfiniteScrollContainer = styled.div`
  max-height: calc(100vh - 50px);
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin-top: 3%;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 20px;
`;
