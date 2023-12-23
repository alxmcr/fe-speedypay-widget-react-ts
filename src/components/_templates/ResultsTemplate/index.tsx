import React from 'react';
import {
  BANK_TRANSFER_STEPS,
  CASH_STEPS,
} from '../../../helpers/constants/constants-steps';
import { OrderContext } from '../../../providers/order/OrderProvider/OrderContext';
import BarcodeGroup from '../../barcodes/BarcodeGroup';
import OrderInfoGroup from '../../orders/OrderInfoGroup';
import Instructions from '../../steps/Instructions';
import { AppTemplateStyled } from '../AppTemplate.styled';

export default function ResultsTemplate() {
  const { order } = React.useContext(OrderContext);

  return (
    <AppTemplateStyled>
      <BarcodeGroup text={order?.reference_number || '13123'} />
      {order !== null ? <OrderInfoGroup order={order} /> : null}
      <div>
        <Instructions steps={CASH_STEPS} />
      </div>
      <div>
        <Instructions steps={BANK_TRANSFER_STEPS} />
      </div>
    </AppTemplateStyled>
  );
}
