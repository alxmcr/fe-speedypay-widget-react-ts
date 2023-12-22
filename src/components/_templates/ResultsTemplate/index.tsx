import React from 'react';
import {
  BANK_TRANSFER_STEPS,
  CASH_STEPS,
} from '../../../helpers/constants/constants-steps';
import { CheckoutContext } from '../../../providers/checkout/CheckoutProvider/CheckoutContext';
import BarcodeGroup from '../../barcodes/BarcodeGroup';
import StepsGroup from '../../steps/StepsGroup';
import { AppTemplateStyled } from '../AppTemplate.styled';

export default function ResultsTemplate() {
  const { checkout } = React.useContext(CheckoutContext);

  return (
    <AppTemplateStyled>
      <BarcodeGroup text={checkout?.id || '13123'} />
      <div>
        <StepsGroup steps={CASH_STEPS} />
      </div>
      <div>
        <StepsGroup steps={BANK_TRANSFER_STEPS} />
      </div>
    </AppTemplateStyled>
  );
}
