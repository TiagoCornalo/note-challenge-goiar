import styled from "styled-components";
import {
  OpacityOn,
  OpacityOff,
  FromBottom,
  ToBottom,
} from "./animation.styled";
export const ModalContainer = styled.div<{ isClosing?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  animation: ${(props) => (props.isClosing ? OpacityOff : OpacityOn)} 0.5s
    ease-in-out;
`;

export const ModalWrapper = styled.div<{ isClosing?: boolean }>`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 24px;
  animation: ${(props) => (props.isClosing ? ToBottom : FromBottom)} 0.5s
    ease-in-out;
`;
