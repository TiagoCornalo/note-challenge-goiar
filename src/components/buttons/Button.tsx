import React from "react";
import { ButtonStyled } from "@/styled-components";

type ButtonProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type: "button" | "submit" | "reset" | undefined;
  margin?: string;
};

export default function Button({
  children,
  onClick,
  type,
  margin,
}: ButtonProps) {
  return (
    <ButtonStyled type={type} onClick={onClick} margin={margin}>
      {children}
    </ButtonStyled>
  );
}
