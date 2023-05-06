import React from "react";
import { InputStyled } from "@/components/inputs";

type InputProps = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
};

export default function Input({
  name,
  value,
  onChange,
  placeholder,
  type,
}: InputProps) {
  return (
    <InputStyled
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
}
