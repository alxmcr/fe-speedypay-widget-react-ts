import AppIcon from '.';
import { IconNames } from '../../../types/appEnums';

export default function AppIconList() {
  return (
    <div
      style={{
        color: '#52a6f3',
        alignItems: 'center',
        display: 'flex',
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
