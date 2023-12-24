import React from 'react';
import { ChargeContext } from '../../../providers/charge/ChargeProvider/ChargeContext';
import { AppTemplateStyled } from '../AppTemplate.styled';
import HeaderPayment from '../../headers/HeaderPayment';
import BoxChargeSuccess from '../../charges/BoxChargeSuccess';

export default function ChargeTemplate() {
  const { charge } = React.useContext(ChargeContext);

  if (charge === null) {
    return null;
  }

  return (
    <AppTemplateStyled>
      <HeaderPayment status={charge?.status} />
      <BoxChargeSuccess />
    </AppTemplateStyled>
  );
}
