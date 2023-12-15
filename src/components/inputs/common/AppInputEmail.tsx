import React from 'react';
import { AppInputStyled } from './AppInput/AppInput.styled';

type AppInputNumberProps = {
  id: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  width?: string;
  maxLength?: number;
};

export default function AppInputEmail({
  id = 'input-email-id',
  placeholder = 'Enter an email',
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
      type="email"
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      $fullWidth={fullWidth}
      required={required}
      maxLength={maxLength}
      onChange={handlerInput}
      value={valueInput}
    />
  ) : (
    <AppInputStyled
      type="email"
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      $fullWidth={fullWidth}
      required={required}
      onChange={handlerInput}
      value={valueInput}
    />
  );
}
