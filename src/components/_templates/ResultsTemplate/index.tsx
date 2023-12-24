import React from 'react';
import {
  BANK_TRANSFER_STEPS,
  CASH_STEPS,
} from '../../../helpers/constants/constants-steps';
import { PAYMENT_METHODS_CODES } from '../../../mock/db/mock-db-payment-methods';
import { OrderContext } from '../../../providers/order/OrderProvider/OrderContext';
import BoxClabe from '../../boxes/BoxClabe';
import BoxPaymentReference from '../../boxes/BoxPaymentReference';
import HeaderPayment from '../../headers/HeaderPayment';
import BoxOrderInfo from '../../orders/BoxOrderInfo';
import Instructions from '../../steps/Instructions';
import { AppTemplateStyled } from '../AppTemplate.styled';
import { AppTemplateBodyStyled } from '../AppTemplateBody.styled';
import BoxChargeSuccess from '../../charges/BoxChargeSuccess';

export default function ResultsTemplate() {
  const { order } = React.useContext(OrderContext);

  if (order === null) {
    return null;
  }

  return (
    <AppTemplateStyled>
      <HeaderPayment status={order?.status} />
      <BoxChargeSuccess />
      <AppTemplateBodyStyled>
        {order.payment_method.code === PAYMENT_METHODS_CODES.cash ? (
          <BoxPaymentReference />
        ) : null}
        {order.payment_method.code === PAYMENT_METHODS_CODES.bankTransfer ? (
          <BoxClabe />
        ) : null}

        {order !== null ? <BoxOrderInfo /> : null}

        {order.payment_method.code === PAYMENT_METHODS_CODES.cash ? (
          <Instructions steps={CASH_STEPS} />
        ) : null}
        {order.payment_method.code === PAYMENT_METHODS_CODES.bankTransfer ? (
          <Instructions steps={BANK_TRANSFER_STEPS} />
        ) : null}
      </AppTemplateBodyStyled>
    </AppTemplateStyled>
  );
}
