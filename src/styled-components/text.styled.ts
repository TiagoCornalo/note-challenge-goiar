import styled from "styled-components";

export const TitleStyled = styled.h1<{
  size?: string;
  color?: string;
  margin?: string;
}>`
  font-weight: 700;
  font-size: ${(props) => props.size || "20px"};
  color: ${(props) => props.color || "#030303"};
  margin: ${(props) => props.margin || "0"};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  word-break: break-word;
`;

export const TextStyled = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #030303;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  word-break: break-word;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  resize: vertical;
  margin: 20px 0;

  &:focus {
    outline: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  &::placeholder {
    color: #ccc;
  }
`;
