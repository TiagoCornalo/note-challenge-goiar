import styled from "styled-components";

export const InputStyled = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  &::placeholder {
    color: #ccc;
  }
`;
