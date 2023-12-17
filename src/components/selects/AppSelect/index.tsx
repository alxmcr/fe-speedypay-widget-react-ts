import React from 'react';
import { AppSelectStyled } from './AppSelect.styled';
import { AppSelectOptionStyled } from './AppSelectOption.styled';
import { AppOptionOnSelect } from '../../../types/appTypes';

type AppSelectProps = {
  name: string;
  id: string;
  placeholder: string;
  options: AppOptionOnSelect[];
  width: string;
};

export default function AppSelect({
  id = 'select',
  name = 'select',
  options = [],
  placeholder = 'Choose some option',
  width = '100%',
}: AppSelectProps) {
  const [optionSelected, setOptionSelected] = React.useState('');

  const handleOptionSelected = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionSelected(ev.target.value);
  };

  return (
    <AppSelectStyled
      name={name}
      id={id}
      $width={width}
      value={optionSelected}
      onChange={handleOptionSelected}
    >
      <AppSelectOptionStyled value="" disabled>
        {placeholder}
      </AppSelectOptionStyled>
      {options.map((option: AppOptionOnSelect) => (
        <AppSelectOptionStyled key={option.id} value={option.value}>
          {option.text}
        </AppSelectOptionStyled>
      ))}
    </AppSelectStyled>
  );
}
