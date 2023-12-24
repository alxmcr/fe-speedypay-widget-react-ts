import React from 'react';
import { BoxPaymentReferenceStyled } from '../BoxPaymentReference/BoxPaymentReference.styled';
import { OrderContext } from '../../../providers/order/OrderProvider/OrderContext';
import { HeadingSix } from '../../_typography/Headings';
import BarcodeGroup from '../../barcodes/BarcodeGroup';

export default function BoxClabe() {
  const { order } = React.useContext(OrderContext);

  return (
    <BoxPaymentReferenceStyled>
      <HeadingSix>CLABE</HeadingSix>
      <BarcodeGroup text={order?.reference_number || ''} />
    </BoxPaymentReferenceStyled>
  );
}
