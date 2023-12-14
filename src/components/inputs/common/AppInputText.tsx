import React from 'react';
import { BaseInputStyled } from '../BaseInput.styled';

type AppInputNumberProps = {
  id: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  maxLength?: number;
};

export default function AppInputText({
  id = 'input-text-id',
  placeholder = 'Enter a text',
  required = false,
  disabled = false,
  maxLength,
}: AppInputNumberProps) {
  const [valueInput, setValueInput] = React.useState('');

  const handlerInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(ev.target.value);
  };

  return maxLength ? (
    <BaseInputStyled
      type="text"
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      maxLength={maxLength}
      onChange={handlerInput}
      value={valueInput}
    />
  ) : (
    <BaseInputStyled
      type="text"
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      onChange={handlerInput}
      value={valueInput}
    />
  );
}
