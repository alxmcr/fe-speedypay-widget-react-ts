import {
  mockInstallmentsBasic,
  mockInstallmentsFull,
} from '../../mock/mock-options';
import AppSelect from './AppSelect';

export default function SelectsList() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <AppSelect
        id="select-installments"
        name="select-installments"
        placeholder="Choose an installment"
        options={mockInstallmentsFull}
        width="100%"
      />
      <AppSelect
        id="select-installments"
        name="select-installments"
        placeholder="Choose an installment"
        options={mockInstallmentsBasic}
        width="100%"
      />
    </div>
  );
}
