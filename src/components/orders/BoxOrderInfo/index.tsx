import React from 'react';
import { OrderContext } from '../../../providers/order/OrderProvider/OrderContext';
import { HeadingSix } from '../../_typography/Headings';
import OrderInfoGroup from '../OrderInfoGroup';
import { BoxOrderInfoStyled } from './BoxOrderInfo.styled';

export default function BoxOrderInfo() {
  const { order } = React.useContext(OrderContext);

  if (order === null) {
    return null;
  }

  return (
    <BoxOrderInfoStyled>
      <HeadingSix>Order details</HeadingSix>
      <OrderInfoGroup order={order} />
    </BoxOrderInfoStyled>
  );
}
