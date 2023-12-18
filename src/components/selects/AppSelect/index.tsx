import React from 'react';
import { AppSelectStyled } from '../AppSelect.styled';
import { AppSelectOptionStyled } from '../AppSelectOption.styled';
import { AppOptionOnSelect } from '../../../types/appTypes';

type AppSelectProps = {
  name: string;
  id: string;
  placeholder: string;
  options: AppOptionOnSelect[];
  width: string;
  valueOption?: string;
  handleSelect?: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function AppSelect({
  id = 'select',
  name = 'select',
  options = [],
  placeholder = 'Choose some option',
  width = '100%',
  valueOption = '',
  handleSelect,
}: AppSelectProps) {
  return (
    <AppSelectStyled
      name={name}
      id={id}
      $width={width}
      value={valueOption}
      onChange={handleSelect}
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
