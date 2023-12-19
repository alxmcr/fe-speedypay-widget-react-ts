import CheckoutTemplate from '../../components/@templates/CheckoutTemplate';
import ThemeModeToggler from '../../components/toggles/ThemeModeToggler';

export default function HomePage() {

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <ThemeModeToggler />
      <CheckoutTemplate />
    </div>
  );
}
