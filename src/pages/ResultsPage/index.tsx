import ResultsTemplate from '../../components/_templates/ResultsTemplate';
import ThemeModeToggler from '../../components/toggles/ThemeModeToggler';
import OrderProvider from '../../providers/order/OrderProvider';

export default function ResultsPage() {
  return (
    <OrderProvider>
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
        <ResultsTemplate />
      </div>
    </OrderProvider>
  );
}
