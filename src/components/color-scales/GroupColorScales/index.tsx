import { ColorScales } from '../../../types/personalization/typesColors';
import BoxColorScaleCircle from '../BoxColorScaleCircle';

type GroupColorScalesProps = {
  colorScales: ColorScales[];
};

export default function GroupColorScales({
  colorScales = [],
}: GroupColorScalesProps) {
  return (
    <div>
      {colorScales.map((colorScale) => (
        <BoxColorScaleCircle key={colorScale.id} />
      ))}
    </div>
  );
}
