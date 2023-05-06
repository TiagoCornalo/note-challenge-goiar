import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px;
  background-color: #fff;
  margin: 0 10px 0 0;

  @media (max-width: 500px) {
    margin: 10px 0 10px 0;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
`;

export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
`;

export const SearchIcon = styled(FiSearch)`
  font-size: 24px;
`;
