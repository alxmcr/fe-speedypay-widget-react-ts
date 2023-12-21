import { BodyTextOne } from '../../typography/BodyTexts';
import Barcode from '../Barcode';

type BarcodeGroupProps = {
  text: string;
  includetext?: boolean;
  barcolor?: string;
};

export default function BarcodeGroup({ text = '' }: BarcodeGroupProps) {
  return (
    <div>
      <Barcode text={text} barcolor="#ff8565" />
      <BodyTextOne>{text}</BodyTextOne>
    </div>
  );
}
