import React from 'react';
import { AppInputWithMaskStyled } from './AppInputWithMask.styled';

type AppInputWithMaskProps = {
  mask: string;
  placeholder: string;
};

export default function AppInputWithMask({
  mask = '9999 9999 9999 9999',
  placeholder = '0000 0000 0000 0000',
}: AppInputWithMaskProps) {
  const [value, setValue] = React.useState('');

  const handlerInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
  };

  return (
    <AppInputWithMaskStyled
      value={value}
      mask={mask}
      onChange={handlerInput}
      className="input-special-card"
      placeholder={placeholder}
    />
  );
}
