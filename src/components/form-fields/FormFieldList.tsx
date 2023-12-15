import AppInputWithMask from '../inputs/AppInputWithMask';
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
