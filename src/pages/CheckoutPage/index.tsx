import CheckoutTemplate from '../../components/_templates/CheckoutTemplate';
import ThemeModeToggler from '../../components/toggles/ThemeModeToggler';
import CheckoutProviders from '../../providers/checkout/CheckoutProviders';

export default function CheckoutPage() {
  return (
    <CheckoutProviders>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',

          minHeight: '100vh',
        }}
      >
        <ThemeModeToggler />
        <CheckoutTemplate />
      </div>
    </CheckoutProviders>
  );
}
