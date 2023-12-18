import { Installment } from '../../../types/appTypes';
import { AppSelectStyled } from '../AppSelect/AppSelect.styled';
import { AppSelectOptionStyled } from '../AppSelect/AppSelectOption.styled';

type SelectInstallmentsProps = {
  name: string;
  id: string;
  placeholder: string;
  installments: Installment[];
  width: string;
  valueInstallmentSelected?: string;
  handleSelect?: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function SelectInstallments({
  id = 'select',
  name = 'select',
  installments = [],
  placeholder = 'Choose some option',
  width = '100%',
  valueInstallmentSelected = '',
  handleSelect,
}: SelectInstallmentsProps) {
  return (
    <AppSelectStyled
      name={name}
      id={id}
      $width={width}
      value={valueInstallmentSelected}
      onChange={handleSelect}
    >
      <AppSelectOptionStyled value="" disabled>
        {placeholder}
      </AppSelectOptionStyled>
      {installments.map((option: Installment) => (
        <AppSelectOptionStyled key={option.id} value={option.code}>
          {option.name}
        </AppSelectOptionStyled>
      ))}
    </AppSelectStyled>
  );
}
