import styled from "styled-components";

export const HomeHeaderStyled = styled.header`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const SearchAndFilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
