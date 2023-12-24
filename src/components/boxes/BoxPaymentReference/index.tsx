import React from 'react';
import { OrderContext } from '../../../providers/order/OrderProvider/OrderContext';
import { HeadingSix } from '../../_typography/Headings';
import BarcodeGroup from '../../barcodes/BarcodeGroup';
import ButtonOutline from '../../buttons/ButtonOutline';
import { BoxPaymentReferenceStyled } from './BoxPaymentReference.styled';
import { IconNames } from '../../../types/enumsApp';

export default function BoxPaymentReference() {
  const { order } = React.useContext(OrderContext);

  return (
    <BoxPaymentReferenceStyled>
      <HeadingSix>Reference Number</HeadingSix>
      <BarcodeGroup text={order?.reference_number || ''} />
      <ButtonOutline
        btnText="Copy number"
        fullWidth
        leftIconName={IconNames.copy}
        onClick={() => {}}
      />
    </BoxPaymentReferenceStyled>
  );
}
