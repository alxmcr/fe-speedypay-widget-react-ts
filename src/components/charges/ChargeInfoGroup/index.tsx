import { formatterChargeLikeAnArray } from '../../../helpers/helpers-formatters';
import { Charge, DataCharge } from '../../../types/appTypes';
import AppInfo from '../../info/AppInfo';
import { ChargeInfoGroupStyled } from './ChargeInfoGroup.styled';

type ChargeInfoGroupProps = {
  charge: Charge;
};

export default function ChargeInfoGroup({ charge }: ChargeInfoGroupProps) {
  if (charge === null) {
    return null;
  }

  return (
    <ChargeInfoGroupStyled>
      {formatterChargeLikeAnArray(charge).map((data: DataCharge, index) => (
        <AppInfo
          key={index}
          label={data.label}
          typeValue={data.type}
          value={data.value}
        />
      ))}
    </ChargeInfoGroupStyled>
  );
}
