import React from 'react';
import { OrderContext } from '../../../providers/order/OrderProvider/OrderContext';
import { AppTemplateStyled } from '../AppTemplate.styled';
import HeaderPayment from '../../headers/HeaderPayment';
import { AppTemplateBodyStyled } from '../AppTemplateBody.styled';
import BoxPaymentReference from '../../boxes/BoxPaymentReference';
import BoxClabe from '../../boxes/BoxClabe';
import BoxOrderInfo from '../../orders/BoxOrderInfo';
import { PAYMENT_METHODS_CODES } from '../../../mock/db/mock-db-payment-methods';
import {
  BANK_TRANSFER_STEPS,
  CASH_STEPS,
} from '../../../helpers/constants/constants-steps';
import Instructions from '../../steps/Instructions';

export default function OrderTemplate() {
  const { order } = React.useContext(OrderContext);

  if (order === null) {
    return null;
  }

  return (
    <AppTemplateStyled>
      <HeaderPayment
        status={order?.status}
        logoRemoteUrl={order.checkout?.company.logo_url}
      />
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
