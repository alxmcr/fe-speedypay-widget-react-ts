import AppInputWithMask from '../inputs/AppInputWithMask';
import AppInput from '../inputs/common/AppInput';
import FormField from './FormField';

export default function FormFieldList() {
  return (
    <div
      style={{
        color: '#52a6f3',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
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
      <FormField labelText="Expiration date" id="expiration-date">
        <AppInputWithMask mask="99/99" placeholder="MM/DD" required />
      </FormField>
      <FormField labelText="CVC" id="CVC">
        <AppInputWithMask mask="999" placeholder="CVC" required />
      </FormField>
    </div>
  );
}
