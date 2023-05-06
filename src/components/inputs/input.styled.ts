import styled from "styled-components";

export const InputStyled = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  margin: 20px 0;

  &:focus {
    outline: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  &::placeholder {
    color: #939393;
  }
`;
