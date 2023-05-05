import { keyframes } from "styled-components";

export const OpacityOn = keyframes`
  from {
    opacity: 0;
  } 
  to {
    opacity: 1;
  }
`;

export const OpacityOff = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const FromBottom = keyframes`
  from { 
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ToBottom = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(50%);
  }
`;
