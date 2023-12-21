import React from 'react';
import { ThemingContext } from '../../../providers/personalization/ThemingProvider/ThemingContext';
import { BodyTextOne } from '../../typography/BodyTexts';
import Barcode from '../Barcode';

type BarcodeGroupProps = {
  text: string;
  includetext?: boolean;
  barcolor?: string;
};

export default function BarcodeGroup({ text = '' }: BarcodeGroupProps) {
  const { themePersonalized } = React.useContext(ThemingContext);

  return (
    <div>
      <Barcode text={text} barcolor={themePersonalized.styles.colorText} />
      <BodyTextOne>{text}</BodyTextOne>
    </div>
  );
}
