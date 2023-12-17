import FormBasicCheckout from '../../components/forms/FormBasicCheckout';
import FormCardCheckout from '../../components/forms/FormCardCheckout';
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
      <FormBasicCheckout amountToPayValue={2559.56} amountToPayCurrency="MXN" />
      <FormCardCheckout amountToPayValue={2559.56} amountToPayCurrency="MXN" />
    </div>
  );
}
