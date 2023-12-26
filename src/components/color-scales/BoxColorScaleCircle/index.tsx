import {
  ColorScaleCircleSelectedStyled,
  ColorScaleCircleStyled,
} from '../ColorScaleCircle.styled';
import { BoxColorScaleCircleStyled } from './BoxColorScaleCircle.styled';

type BoxColorScaleCircleProps = {
  backgroundColor: string;
  selected?: boolean;
};

export default function BoxColorScaleCircle({
  backgroundColor = '',
  selected = false,
}: BoxColorScaleCircleProps) {
  return (
    <BoxColorScaleCircleStyled>
      {selected ? (
        <ColorScaleCircleSelectedStyled $backgroundColor={backgroundColor} />
      ) : (
        <ColorScaleCircleStyled $backgroundColor={backgroundColor} />
      )}
    </BoxColorScaleCircleStyled>
  );
}
