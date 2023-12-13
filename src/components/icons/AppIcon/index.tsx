import { IconNames } from '../../../types/enumsApp';
import IconArrowDown from '../IconArrowDown';
import IconArrowUp from '../IconArrowUp';
import IconBankTransfer from '../IconBankTransfer';
import IconCheck from '../IconCheck';
import IconCoin from '../IconCoin';
import IconCopy from '../IconCopy';
import IconCreditCard from '../IconCreditCard';
import IconDropdownSelected from '../IconDropdownSelected';
import IconDropdownUnselected from '../IconDropdownUnselected';
import IconEmailOutline from '../IconEmailOutline';
import IconGift from '../IconGift';
import IconPending from '../IconPending';

type AppIconProps = {
  iconName: string;
};

export default function AppIcon({ iconName = IconNames.gift }: AppIconProps) {
  switch (iconName) {
    case IconNames.arrowDown:
      return <IconArrowDown />;
    case IconNames.arrowUp:
      return <IconArrowUp />;
    case IconNames.check:
      return <IconCheck />;
    case IconNames.pending:
      return <IconPending />;
    case IconNames.copy:
      return <IconCopy />;
    case IconNames.dropdownSelected:
      return <IconDropdownSelected />;
    case IconNames.dropdownUnselected:
      return <IconDropdownUnselected />;
    case IconNames.bankTransfer:
      return <IconBankTransfer />;
    case IconNames.coin:
      return <IconCoin />;
    case IconNames.creditCard:
      return <IconCreditCard />;
    case IconNames.gift:
      return <IconGift />;
    case IconNames.email:
      return <IconEmailOutline />;

    default:
      return <IconGift />;
  }
}
