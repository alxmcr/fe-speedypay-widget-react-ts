import React from 'react';
import { ChargeContext } from '../../../providers/charge/ChargeProvider/ChargeContext';
import { HeadingSix } from '../../_typography/Headings';
import ChargeInfoGroup from '../ChargeInfoGroup';
import { BoxChargeInfoStyled } from './BoxChargeInfo.styled';

export default function BoxChargeInfo() {
  const { charge } = React.useContext(ChargeContext);

  if (charge === null) {
    return null;
  }

  return (
    <BoxChargeInfoStyled>
      <HeadingSix>Charge details</HeadingSix>
      <ChargeInfoGroup charge={charge} />
    </BoxChargeInfoStyled>
  );
}
