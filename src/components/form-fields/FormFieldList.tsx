import { mockInstallmentsFull } from '../../mock/mock-installments';
import AppInputWithMask from '../inputs/AppInputWithMask';
import AppInput from '../inputs/common/AppInput';
import AppSelect from '../selects/AppSelect';
import FormField from './FormField';

export default function FormFieldList() {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <FormField labelText="Full name" id="full-name">
        <AppInput
          type="text"
          id="full-name"
          placeholder="Enter your first and last name"
          fullWidth={true}
        />
      </FormField>
      <FormField labelText="Email" id="email">
        <AppInput
          type="email"
          id="email"
          placeholder="Enter your email"
          fullWidth={true}
        />
      </FormField>
      <FormField labelText="Card holder name" id="card-holder-name">
        <AppInput
          type="text"
          id="card-holder-name"
          placeholder="Enter card holder name"
          fullWidth={true}
        />
      </FormField>
      <FormField labelText="Card number" id="card-number">
        <AppInputWithMask
          mask="9999 9999 9999 9999"
          placeholder="Enter your card number"
          required
        />
      </FormField>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          gap: '1rem',
          width: '100%',
        }}
      >
        <FormField labelText="Expiration date" id="expiration-date">
          <AppInputWithMask mask="99/99" placeholder="MM/DD" required />
        </FormField>
        <FormField labelText="CVC" id="CVC">
          <AppInputWithMask mask="999" placeholder="CVC" required />
        </FormField>
        <FormField labelText="Installments" id="select-installments">
          <AppSelect
            id="select-installments"
            name="select-installments"
            placeholder="Choose an installment"
            options={mockInstallmentsFull}
            width="100%"
          />
        </FormField>
      </div>
    </div>
  );
}
