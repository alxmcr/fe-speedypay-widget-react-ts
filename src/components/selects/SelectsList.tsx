import {
  mockInstallmentsBasic,
  mockInstallmentsFull,
} from '../../mock/mock-options';
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
        installments={mockInstallmentsFull}
        width="100%"
      />
      <SelectInstallments
        id="select-installments"
        name="select-installments"
        placeholder="Choose an installment"
        installments={mockInstallmentsBasic}
        width="100%"
      />
    </div>
  );
}
