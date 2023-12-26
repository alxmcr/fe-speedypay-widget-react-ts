import React from 'react';
import { ToggleCodeColorScalesContext } from '../../../providers/personalization/ToggleCodeColorScalesProvider/ToggleCodeColorScalesContext';
import { ColorScales } from '../../../types/personalization/typesColors';
import {
  ColorScaleCircleSelectedStyled,
  ColorScaleCircleStyled,
} from '../ColorScaleCircle.styled';
import { BoxColorScaleCircleStyled } from './BoxColorScaleCircle.styled';

type BoxColorScaleCircleProps = {
  colorScale: ColorScales;
};

export default function BoxColorScaleCircle({
  colorScale,
}: BoxColorScaleCircleProps) {
  const { codeColorScales } = React.useContext(ToggleCodeColorScalesContext);
  console.log({ colorScale, codeColorScales });

  return (
    <BoxColorScaleCircleStyled>
      {codeColorScales === colorScale.id ? (
        <ColorScaleCircleSelectedStyled
          $backgroundColor={colorScale.scales[900]}
        />
      ) : (
        <ColorScaleCircleStyled $backgroundColor={colorScale.scales[900]} />
      )}
    </BoxColorScaleCircleStyled>
  );
}
