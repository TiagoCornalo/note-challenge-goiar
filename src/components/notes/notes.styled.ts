import styled from "styled-components";

export const NotesContainer = styled.div<{ backgroundColor?: string }>`
  width: 200px;
  position: relative;
  height: 200px;
  background-color: ${(props) => props.backgroundColor || "#e3f6fd"};
  padding: 20px;
  line-height: 1.5;
  text-align: center;
  transition: transform 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 20px 20px 0;
    border-color: transparent #1e1e1e transparent transparent;
    box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    transform: scale(1.1) rotate(-3deg);
  }
`;

export const Pin = styled.div`
  width: 20px;
  height: 20px;
  background-color: #dd1c1a;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;
