import ResultsTemplate from '../../components/_templates/ResultsTemplate';
import GroupColorScales from '../../components/color-scales/GroupColorScales';
import ThemeModeToggler from '../../components/toggles/ThemeModeToggler';
import { colorScales001 } from '../../mock/mock-color-scales';
import OrderProvider from '../../providers/order/OrderProvider';

export default function OrderPage() {
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
        <GroupColorScales colorScales={colorScales001} />
        <ResultsTemplate />
      </div>
    </OrderProvider>
  );
}
