import styled from "styled-components";

export const InfiniteScrollContainer = styled.div`
  max-height: calc(100vh - 50px);
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 100px;
`;
