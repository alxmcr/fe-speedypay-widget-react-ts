import React from 'react';
import { OrderContext } from '../../../providers/order/OrderProvider/OrderContext';
import { HeadingSix } from '../../_typography/Headings';
import OrderInfoGroup from '../OrderInfoGroup';

export default function BoxOrderInfo() {
  const { order } = React.useContext(OrderContext);

  if (order === null) {
    return null;
  }

  return (
    <article>
      <HeadingSix>Order details</HeadingSix>
      <OrderInfoGroup order={order} />
    </article>
  );
}
