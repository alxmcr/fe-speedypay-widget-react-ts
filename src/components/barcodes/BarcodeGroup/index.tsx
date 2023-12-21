import { ThemeContext } from 'styled-components';
import { BodyTextOne } from '../../typography/BodyTexts';
import Barcode from '../Barcode';
import React from 'react';
import { ToggleModeThemeContext } from '../../../providers/personalization/ToggleModeThemeProvider/ToggleModeThemeContext';
import { ToggleCodeColorScalesContext } from '../../../providers/personalization/ToggleCodeColorScalesProvider/ToggleCodeColorScalesContext';
import { ThemingContext } from '../../../providers/personalization/ThemingProvider/ThemingContext';

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
