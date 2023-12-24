import ChargeTemplate from '../../components/_templates/ChargeTemplate';
import { HeadingOne } from '../../components/_typography/Headings';
import ChargeProvider from '../../providers/charge/ChargeProvider';

export default function ChargePage() {
  return (
    <ChargeProvider>
      <div>
        <HeadingOne>Charge</HeadingOne>
        <ChargeTemplate />
      </div>
    </ChargeProvider>
  );
}
