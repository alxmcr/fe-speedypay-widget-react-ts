import CheckoutTemplate from '../../components/_templates/CheckoutTemplate';
import SelectColorScales from '../../components/selects/SelectColorScales';
import ThemeModeToggler from '../../components/toggles/ThemeModeToggler';
import { colorScales001 } from '../../mock/mock-color-scales';
import CheckoutProviders from '../../providers/checkout/CheckoutProviders';

export default function CheckoutPage() {
  const handleSelectColorScale = () => {
    console.log('...');
  };

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
        <SelectColorScales
          colorScales={colorScales001}
          id="color-scales"
          name="color-scales"
          placeholder="Choose a color scale"
          width="100%"
          handleSelect={handleSelectColorScale}
          valueColorScalesSelected=""
        />
        <CheckoutTemplate />
      </div>
    </CheckoutProviders>
  );
}
