import ChargeTemplate from '../../components/_templates/ChargeTemplate';
import ThemeModeToggler from '../../components/toggles/ThemeModeToggler';
import ChargeProvider from '../../providers/charge/ChargeProvider';

export default function ChargePage() {
  return (
    <ChargeProvider>
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
        <ChargeTemplate />
      </div>
    </ChargeProvider>
  );
}
