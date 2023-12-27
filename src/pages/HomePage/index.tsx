import ChargeTemplate from '../../components/_templates/ChargeTemplate';
import CheckoutTemplate from '../../components/_templates/CheckoutTemplate';
import OrderTemplate from '../../components/_templates/OrderTemplate';
import GroupColorScales from '../../components/color-scales/GroupColorScales';
import ThemeModeToggler from '../../components/toggles/ThemeModeToggler';
import { colorScales001 } from '../../mock/mock-color-scales';
import ChargeProvider from '../../providers/charge/ChargeProvider';
import CheckoutProviders from '../../providers/checkout/CheckoutProviders';
import OrderProvider from '../../providers/order/OrderProvider';

export default function HomePage() {
  return (
    <CheckoutProviders>
      <ChargeProvider>
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
            <div
              style={{
                alignItems: 'flex-start',
                display: 'flex',
                gap: '1rem',
                overflowX: 'auto',
              }}
            >
              <CheckoutTemplate />
              <OrderTemplate />
              <ChargeTemplate />
            </div>
          </div>
        </OrderProvider>
      </ChargeProvider>
    </CheckoutProviders>
  );
}
