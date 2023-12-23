import React from 'react';
import {
  BANK_TRANSFER_STEPS,
  CASH_STEPS,
} from '../../../helpers/constants/constants-steps';
import { OrderContext } from '../../../providers/order/OrderProvider/OrderContext';
import BarcodeGroup from '../../barcodes/BarcodeGroup';
import BoxOrderInfo from '../../orders/BoxOrderInfo';
import Instructions from '../../steps/Instructions';
import { AppTemplateStyled } from '../AppTemplate.styled';
import HeaderPayment from '../../headers/HeaderPayment';
import BoxPaymentReference from '../../boxes/BoxPaymentReference';

export default function ResultsTemplate() {
  const { order } = React.useContext(OrderContext);

  if (order === null) {
    return null;
  }

  return (
    <AppTemplateStyled>
      <BarcodeGroup text={order?.reference_number || '13123'} />
      <HeaderPayment status={order?.status} />
      {order !== null ? <BoxOrderInfo /> : null}
      <BoxPaymentReference />
      <div>
        <Instructions steps={CASH_STEPS} />
      </div>
      <div>
        <Instructions steps={BANK_TRANSFER_STEPS} />
      </div>
    </AppTemplateStyled>
  );
}
