import React from 'react';
import {
  BANK_TRANSFER_STEPS,
  CASH_STEPS,
} from '../../../helpers/constants/constants-steps';
import { OrderContext } from '../../../providers/order/OrderProvider/OrderContext';
import BoxClabe from '../../boxes/BoxClabe';
import BoxPaymentReference from '../../boxes/BoxPaymentReference';
import HeaderPayment from '../../headers/HeaderPayment';
import BoxOrderInfo from '../../orders/BoxOrderInfo';
import Instructions from '../../steps/Instructions';
import { AppTemplateStyled } from '../AppTemplate.styled';
import { AppTemplateBodyStyled } from '../AppTemplateBody.styled';

export default function ResultsTemplate() {
  const { order } = React.useContext(OrderContext);

  if (order === null) {
    return null;
  }

  return (
    <AppTemplateStyled>
      <HeaderPayment status={order?.status} />
      <AppTemplateBodyStyled>
        <BoxPaymentReference />
        <BoxClabe />
        {order !== null ? <BoxOrderInfo /> : null}
        <div>
          <Instructions steps={CASH_STEPS} />
        </div>
        <div>
          <Instructions steps={BANK_TRANSFER_STEPS} />
        </div>
      </AppTemplateBodyStyled>
    </AppTemplateStyled>
  );
}
