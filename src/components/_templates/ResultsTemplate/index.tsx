import React from 'react';
import { CheckoutContext } from '../../../providers/checkout/CheckoutProvider/CheckoutContext';
import { AppTemplateStyled } from '../AppTemplate.styled';
import BarcodeGroup from '../../barcodes/BarcodeGroup';
import AppStep from '../../steps/AppStep';
import { NumberNames } from '../../../types/enumsApp';

export default function ResultsTemplate() {
  const { checkout } = React.useContext(CheckoutContext);

  return (
    <AppTemplateStyled>
      <BarcodeGroup text={checkout?.id || '13123'} />
      <AppStep text="equwieuioqw" stepNumber={NumberNames.one} />
      <AppStep text="vcxvxcvx" stepNumber={NumberNames.two} />
    </AppTemplateStyled>
  );
}
