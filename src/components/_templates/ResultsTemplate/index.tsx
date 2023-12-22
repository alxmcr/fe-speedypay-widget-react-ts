import React from 'react';
import { CheckoutContext } from '../../../providers/checkout/CheckoutProvider/CheckoutContext';
import { AppTemplateStyled } from '../AppTemplate.styled';
import BarcodeGroup from '../../barcodes/BarcodeGroup';

export default function ResultsTemplate() {
  const { checkout } = React.useContext(CheckoutContext);

  return (
    <AppTemplateStyled>
      <BarcodeGroup text={checkout?.id || '13123'} />
    </AppTemplateStyled>
  );
}
