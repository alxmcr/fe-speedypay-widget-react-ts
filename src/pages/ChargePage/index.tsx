import ChargeTemplate from '../../components/_templates/ChargeTemplate';
import GroupColorScales from '../../components/color-scales/GroupColorScales';
import ThemeModeToggler from '../../components/toggles/ThemeModeToggler';
import { colorScales001 } from '../../mock/mock-color-scales';
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
        <GroupColorScales colorScales={colorScales001} />
        <ChargeTemplate />
      </div>
    </ChargeProvider>
  );
}
