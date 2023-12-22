import CheckoutTemplate from '../../components/_templates/CheckoutTemplate';
import ThemeModeToggler from '../../components/toggles/ThemeModeToggler';

export default function HomePage() {
  return (
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
  );
}
