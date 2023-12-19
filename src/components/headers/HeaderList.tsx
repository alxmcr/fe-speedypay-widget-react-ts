import HeaderCheckoutForm from './HeaderCheckoutForm';

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
    </div>
  );
}
