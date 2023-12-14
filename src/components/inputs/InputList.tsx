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
        id="name"
        placeholder="Enter your name"
        fullWidth={true}
      />
      <AppInput
        type="email"
        id="email"
        placeholder="Enter your email"
        fullWidth={true}
      />
      <AppInputWithMask
        mask="9999 9999 9999 9999"
        placeholder="Enter your card number"
      />
      <AppInputWithMask mask="999" placeholder="CVC" />
      <AppInputWithMask mask="99/99" placeholder="MM/DD" />
    </div>
  );
}
