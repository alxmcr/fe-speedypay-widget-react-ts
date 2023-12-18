import React from 'react';
import { AppInputStyled } from './AppInput/AppInput.styled';

type AppInputNumberProps = {
  id: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  maxLength?: number;
  fullWidth?: boolean;
};

export default function AppInputText({
  id = 'input-text-id',
  placeholder = 'Enter a text',
  required = false,
  disabled = false,
  fullWidth = false,
  maxLength,
}: AppInputNumberProps) {
  const [valueInput, setValueInput] = React.useState('');

  const handlerInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(ev.target.value);
  };

  return maxLength ? (
    <AppInputStyled
      type="text"
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      $fullWidth={fullWidth}
      required={required}
      maxLength={maxLength}
      onChange={handlerInput}
      value={valueInput}
      autoComplete="off"
    />
  ) : (
    <AppInputStyled
      type="text"
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      $fullWidth={fullWidth}
      required={required}
      onChange={handlerInput}
      value={valueInput}
      autoComplete="off"
    />
  );
}
