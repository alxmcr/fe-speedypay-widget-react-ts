import React from 'react';
import { CheckoutContext } from '../../../providers/checkout/CheckoutProvider/CheckoutContext';
import { AppTemplateStyled } from '../AppTemplate.styled';
import BarcodeGroup from '../../barcodes/BarcodeGroup';
import AppStep from '../../steps/AppStep';
import { NumberNames } from '../../../types/enumsApp';
import {
  BANK_TRANSFER_STEPS,
  CASH_STEPS,
} from '../../../helpers/constants/constants-steps';

export default function ResultsTemplate() {
  const { checkout } = React.useContext(CheckoutContext);

  return (
    <AppTemplateStyled>
      <BarcodeGroup text={checkout?.id || '13123'} />
      <div>
        <AppStep text={CASH_STEPS.one} stepNumber={NumberNames.one} />
        <AppStep text={CASH_STEPS.two} stepNumber={NumberNames.two} />
        <AppStep text={CASH_STEPS.three} stepNumber={NumberNames.three} />
      </div>
      <div>
        <AppStep text={BANK_TRANSFER_STEPS.one} stepNumber={NumberNames.one} />
        <AppStep text={BANK_TRANSFER_STEPS.two} stepNumber={NumberNames.two} />
        <AppStep
          text={BANK_TRANSFER_STEPS.three}
          stepNumber={NumberNames.three}
        />
      </div>
    </AppTemplateStyled>
  );
}
