import { ColorScales } from '../../../types/personalization/typesColorScales';
import { AppSelectStyled } from '../AppSelect.styled';
import { AppSelectOptionStyled } from '../AppSelectOption.styled';

type SelectInstallmentsProps = {
  name: string;
  id: string;
  placeholder: string;
  colorScales: ColorScales[];
  width: string;
  valueColorScalesSelected?: string;
  handleSelect?: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function SelectInstallments({
  id = 'select',
  name = 'select',
  colorScales = [],
  placeholder = 'Choose some option',
  width = '100%',
  valueColorScalesSelected = '',
  handleSelect,
}: SelectInstallmentsProps) {
  return (
    <AppSelectStyled
      name={name}
      id={id}
      $width={width}
      value={valueColorScalesSelected}
      onChange={handleSelect}
    >
      <AppSelectOptionStyled value="" disabled>
        {placeholder}
      </AppSelectOptionStyled>
      {colorScales.map((option: ColorScales) => (
        <AppSelectOptionStyled key={option.id} value={option.id}>
          {option.name}
        </AppSelectOptionStyled>
      ))}
    </AppSelectStyled>
  );
}
