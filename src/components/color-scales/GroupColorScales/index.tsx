import { ColorScales } from '../../../types/personalization/typesColorScales';
import BoxColorScaleCircle from '../BoxColorScaleCircle';
import { GroupColorScalesStyled } from './GroupColorScales.styled';

type GroupColorScalesProps = {
  colorScales: ColorScales[];
};

export default function GroupColorScales({
  colorScales = [],
}: GroupColorScalesProps) {
  return (
    <GroupColorScalesStyled>
      {colorScales.map((colorScale) => (
        <BoxColorScaleCircle key={colorScale.id} colorScale={colorScale} />
      ))}
    </GroupColorScalesStyled>
  );
}
