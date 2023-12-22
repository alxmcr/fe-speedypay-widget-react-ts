import React from 'react';
import {
  BANK_TRANSFER_STEPS,
  CASH_STEPS,
} from '../../../helpers/constants/constants-steps';
import { CheckoutContext } from '../../../providers/checkout/CheckoutProvider/CheckoutContext';
import BarcodeGroup from '../../barcodes/BarcodeGroup';
import Instructions from '../../steps/Instructions';
import { AppTemplateStyled } from '../AppTemplate.styled';
import AppInfo from '../../info/AppInfo';

export default function ResultsTemplate() {
  const { checkout } = React.useContext(CheckoutContext);

  return (
    <AppTemplateStyled>
      <BarcodeGroup text={checkout?.id || '13123'} />
      <AppInfo labelText="Order ID" valueText="ord-ab7vbx3dsa2ewqe1321" />
      <div>
        <Instructions steps={CASH_STEPS} />
      </div>
      <div>
        <Instructions steps={BANK_TRANSFER_STEPS} />
      </div>
    </AppTemplateStyled>
  );
}
