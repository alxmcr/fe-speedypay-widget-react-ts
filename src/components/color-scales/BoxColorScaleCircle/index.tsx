import {
  ColorScaleCircleSelectedStyled,
  ColorScaleCircleStyled,
} from '../ColorScaleCircle.styled';
import { BoxColorScaleCircleStyled } from './BoxColorScaleCircle.styled';

type BoxColorScaleCircleProps = {
  selected: boolean;
};

export default function BoxColorScaleCircle({
  selected = false,
}: BoxColorScaleCircleProps) {
  return (
    <BoxColorScaleCircleStyled>
      {selected ? (
        <ColorScaleCircleSelectedStyled />
      ) : (
        <ColorScaleCircleStyled />
      )}
    </BoxColorScaleCircleStyled>
  );
}
