import React from 'react';
import { AppInputWithMaskStyled } from './AppInputWithMask.styled';

type AppInputWithMaskProps = {
  mask: string;
  placeholder: string;
  fullWidth?: boolean;
};

export default function AppInputWithMask({
  mask = '9999 9999 9999 9999',
  placeholder = '0000 0000 0000 0000',
  fullWidth = false,
}: AppInputWithMaskProps) {
  console.log({ mask, placeholder });
  const [value, setValue] = React.useState('');

  const handlerInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
  };

  return (
    <AppInputWithMaskStyled
      value={value}
      onChange={handlerInput}
      className="input-special-card"
      placeholder={placeholder}
      $fullWidth={fullWidth}
    />
  );
}
