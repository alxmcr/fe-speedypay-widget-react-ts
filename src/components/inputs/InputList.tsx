import AppInputWithMask from './AppInputWithMask';
import AppInput from './common/AppInput';

export default function InputList() {
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
      <AppInput
        type="text"
        id="full-name"
        placeholder="Enter your first and last name"
        fullWidth={true}
      />
      <AppInput
        type="text"
        id="card-holder-name"
        placeholder="Enter card holder name"
        fullWidth={true}
      />
      <AppInput
        type="email"
        id="email"
        placeholder="Enter your email"
        fullWidth={true}
      />
      <AppInputWithMask
        id="card-number"
        mask="9999 9999 9999 9999"
        placeholder="Enter your card number"
      />
      <AppInputWithMask id="cvc" mask="999" placeholder="CVC" />
      <AppInputWithMask id="expiration-date" mask="99/99" placeholder="MM/DD" />
    </div>
  );
}
