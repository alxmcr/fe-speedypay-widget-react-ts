import AppIcon from '.';
import { IconNames } from './IconNames';

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
      <AppIcon iconName={IconNames.bankTransfer} />
      <AppIcon iconName={IconNames.cash} />
      <AppIcon iconName={IconNames.copy} />
      <AppIcon iconName={IconNames.creditCard} />
      <AppIcon iconName={IconNames.email} />
      <AppIcon iconName={IconNames.gift} />
    </div>
  );
}
