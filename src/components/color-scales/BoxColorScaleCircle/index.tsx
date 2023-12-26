import React from 'react';
import { ToggleCodeColorScalesContext } from '../../../providers/personalization/ToggleCodeColorScalesProvider/ToggleCodeColorScalesContext';
import { ColorScales } from '../../../types/personalization/typesColorScales';
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
  const { codeColorScalesSelected } = React.useContext(
    ToggleCodeColorScalesContext,
  );
  console.log({ colorScale, codeColorScalesSelected });

  return (
    <BoxColorScaleCircleStyled>
      {codeColorScalesSelected === colorScale.id ? (
        <ColorScaleCircleSelectedStyled
          $backgroundColor={colorScale.scales[900]}
        />
      ) : (
        <ColorScaleCircleStyled $backgroundColor={colorScale.scales[900]} />
      )}
    </BoxColorScaleCircleStyled>
  );
}
