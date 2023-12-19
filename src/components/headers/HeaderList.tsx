import HeaderCheckoutForm from './HeaderCheckoutForm';
import HeaderPayment from './HeaderPayment';

export default function HeaderList() {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <HeaderCheckoutForm />
      <HeaderPayment />
    </div>
  );
}
