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
      <FormField labelText="Expiration date" id="expiration-date">
        <AppInputWithMask mask="99/99" placeholder="MM/DD" />
      </FormField>
    </div>
  );
}
