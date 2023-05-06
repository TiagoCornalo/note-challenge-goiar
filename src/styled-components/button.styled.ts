import styled from "styled-components";

export const ButtonStyled = styled.button<{ margin?: string }>`
  background-color: #dfecd8;
  color: #030303;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  margin: ${(props) => props.margin || "0"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  &:hover {
    background-color: #d0efb8;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(2px);
  }
`;
