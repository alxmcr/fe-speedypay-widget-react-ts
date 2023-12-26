import CheckoutTemplate from '../../components/_templates/CheckoutTemplate';
import GroupColorScales from '../../components/color-scales/GroupColorScales';
import ThemeModeToggler from '../../components/toggles/ThemeModeToggler';
import { mockColorScales } from '../../mock/mock-color-scales';
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
        <GroupColorScales colorScales={mockColorScales} />
        <CheckoutTemplate />
      </div>
    </CheckoutProviders>
  );
}
