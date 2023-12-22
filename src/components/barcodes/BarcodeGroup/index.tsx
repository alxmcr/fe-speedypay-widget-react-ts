import React from 'react';
import { ThemingContext } from '../../../providers/personalization/ThemingProvider/ThemingContext';
import { BodyTextOne } from '../../typography/BodyTexts';
import Barcode from '../Barcode';
import { BardcodeGroupStyled } from './BarcodeGroup.styled';

type BarcodeGroupProps = {
  text: string;
  includetext?: boolean;
  barcolor?: string;
};

export default function BarcodeGroup({ text = '' }: BarcodeGroupProps) {
  const { themePersonalized } = React.useContext(ThemingContext);

  return (
    <BardcodeGroupStyled>
      <Barcode text={text} barcolor={themePersonalized.styles.colorText} />
      <BodyTextOne>{text}</BodyTextOne>
    </BardcodeGroupStyled>
  );
}
