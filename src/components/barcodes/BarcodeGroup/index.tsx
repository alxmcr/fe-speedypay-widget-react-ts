import React from 'react';
import { ThemingContext } from '../../../providers/personalization/ThemingProvider/ThemingContext';
import { BodyTextOne } from '../../_typography/BodyTexts';
import Barcode from '../Barcode';
import { BarcodeGroupStyled } from './BarcodeGroup.styled';

type BarcodeGroupProps = {
  text: string;
  includetext?: boolean;
  barcolor?: string;
};

export default function BarcodeGroup({ text = '' }: BarcodeGroupProps) {
  const { themePersonalized } = React.useContext(ThemingContext);

  return (
    <BarcodeGroupStyled>
      <Barcode text={text} barcolor={themePersonalized.styles.colorText} />
      <BodyTextOne>{text}</BodyTextOne>
    </BarcodeGroupStyled>
  );
}
