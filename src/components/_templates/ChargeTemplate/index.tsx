import React from 'react';
import { ChargeContext } from '../../../providers/charge/ChargeProvider/ChargeContext';
import { AppTemplateStyled } from '../AppTemplate.styled';

export default function ChargeTemplate() {
  const { charge } = React.useContext(ChargeContext);

  if (charge === null) {
    return null;
  }

  return <AppTemplateStyled>
    
  </AppTemplateStyled>;
}
