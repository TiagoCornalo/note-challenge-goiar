import styled from "styled-components";
import { BsTrash3 } from "react-icons/bs";
export const DetailNoteModalStyled = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 250px;
`;

export const DeleteNoteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const DeleteNoteIcon = styled(BsTrash3)`
  font-size: 20px;
  transition: 0.3s;

  &:hover {
    color: red;
  }
`;
