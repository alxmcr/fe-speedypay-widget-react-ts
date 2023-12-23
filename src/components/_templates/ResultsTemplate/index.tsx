import React from 'react';
import {
  BANK_TRANSFER_STEPS,
  CASH_STEPS,
} from '../../../helpers/constants/constants-steps';
import { OrderContext } from '../../../providers/order/OrderProvider/OrderContext';
import BarcodeGroup from '../../barcodes/BarcodeGroup';
import AppInfo from '../../info/AppInfo';
import Instructions from '../../steps/Instructions';
import { AppTemplateStyled } from '../AppTemplate.styled';

export default function ResultsTemplate() {
  const { order } = React.useContext(OrderContext);
  console.log('🚀 ~ file: index.tsx:14 ~ ResultsTemplate ~ order:', order);

  return (
    <AppTemplateStyled>
      <BarcodeGroup text={order?.id || '13123'} />
      <AppInfo labelText="Order ID" valueText={order?.id || ''} />
      <div>
        <Instructions steps={CASH_STEPS} />
      </div>
      <div>
        <Instructions steps={BANK_TRANSFER_STEPS} />
      </div>
    </AppTemplateStyled>
  );
}
