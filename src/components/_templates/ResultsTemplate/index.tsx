import React from 'react';
import {
  BANK_TRANSFER_ONE_STEP,
  BANK_TRANSFER_THREE_STEP,
  BANK_TRANSFER_TWO_STEP,
  CASH_ONE_STEP,
  CASH_THREE_STEP,
  CASH_TWO_STEP
} from '../../../helpers/constants/constants-steps';
import { CheckoutContext } from '../../../providers/checkout/CheckoutProvider/CheckoutContext';
import { NumberNames } from '../../../types/enumsApp';
import BarcodeGroup from '../../barcodes/BarcodeGroup';
import AppStep from '../../steps/AppStep';
import { AppTemplateStyled } from '../AppTemplate.styled';

export default function ResultsTemplate() {
  const { checkout } = React.useContext(CheckoutContext);

  return (
    <AppTemplateStyled>
      <BarcodeGroup text={checkout?.id || '13123'} />
      <div>
        <AppStep text={CASH_ONE_STEP} stepNumber={NumberNames.one} />
        <AppStep text={CASH_TWO_STEP} stepNumber={NumberNames.two} />
        <AppStep text={CASH_THREE_STEP} stepNumber={NumberNames.three} />
      </div>
      <div>
        <AppStep text={BANK_TRANSFER_ONE_STEP} stepNumber={NumberNames.one} />
        <AppStep text={BANK_TRANSFER_TWO_STEP} stepNumber={NumberNames.two} />
        <AppStep
          text={BANK_TRANSFER_THREE_STEP}
          stepNumber={NumberNames.three}
        />
      </div>
    </AppTemplateStyled>
  );
}
