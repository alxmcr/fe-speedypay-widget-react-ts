import {
  OnePayment,
  SixMonths,
  ThreeMonths,
} from '../../mock/data/mock-installments';
import SelectInstallments from './SelectInstallments';

export default function SelectsList() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <SelectInstallments
        id="select-installments"
        name="select-installments"
        placeholder="Choose an installment"
        installments={[OnePayment, ThreeMonths, SixMonths]}
        width="100%"
      />
      <SelectInstallments
        id="select-installments"
        name="select-installments"
        placeholder="Choose an installment"
        installments={[OnePayment, ThreeMonths]}
        width="100%"
      />
    </div>
  );
}
