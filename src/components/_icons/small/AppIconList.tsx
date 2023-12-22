import AppIcon from '../AppIcon';
import { IconNames } from '../../../types/enumsApp';

export default function AppIconList() {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      <AppIcon iconName={IconNames.arrowDown} />
      <AppIcon iconName={IconNames.arrowUp} />
      <AppIcon iconName={IconNames.check} />
      <AppIcon iconName={IconNames.pending} />
      <AppIcon iconName={IconNames.copy} />
      <AppIcon iconName={IconNames.dropdownSelected} />
      <AppIcon iconName={IconNames.dropdownUnselected} />
      <AppIcon iconName={IconNames.bankTransfer} />
      <AppIcon iconName={IconNames.coin} />
      <AppIcon iconName={IconNames.creditCard} />
      <AppIcon iconName={IconNames.gift} />
      <AppIcon iconName={IconNames.email} />
    </div>
  );
}
