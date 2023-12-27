import React from 'react';
import { ChargeContext } from '../../../providers/charge/ChargeProvider/ChargeContext';
import BoxChargeInfo from '../../charges/BoxChargeInfo';
import BoxChargeSuccess from '../../charges/BoxChargeSuccess';
import HeaderPayment from '../../headers/HeaderPayment';
import { AppTemplateStyled } from '../AppTemplate.styled';
import { AppTemplateBodyStyled } from '../AppTemplateBody.styled';

export default function ChargeTemplate() {
  const { charge } = React.useContext(ChargeContext);

  if (charge === null) {
    return null;
  }

  return (
    <AppTemplateStyled>
      <HeaderPayment
        status={charge?.status}
        logoRemoteUrl={charge.checkout?.company.logo_url}
      />
      <AppTemplateBodyStyled>
        <BoxChargeSuccess />
        <BoxChargeInfo />
      </AppTemplateBodyStyled>
    </AppTemplateStyled>
  );
}
