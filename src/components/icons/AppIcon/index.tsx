import IconArrowDown from '@components/icons/IconArrowDown';
import IconArrowUp from '@components/icons/IconArrowUp';
import IconBankTransfer from '@components/icons/IconBankTransfer';
import IconCash from '@components/icons/IconCoin';
import IconCopy from '@components/icons/IconCopy';
import IconCreditCard from '@components/icons/IconCreditCard';
import IconEmailOutline from '@components/icons/IconEmailOutline';
import IconGift from '@components/icons/IconGift';
import IconCheck from '../IconCheck';
import IconDropdownSelected from '../IconDropdownSelected';
import IconDropdownUnselected from '../IconDropdownUnselected';
import IconPending from '../IconPending';
import { AppIconWrapper } from './AppIconWrapper';
import { IconNames } from './IconNames';

type AppIconProps = {
  iconName: string;
};

export default function AppIcon({ iconName = IconNames.gift }: AppIconProps) {
  switch (iconName) {
    case IconNames.arrowDown:
      return (
        <AppIconWrapper>
          <IconArrowDown />
        </AppIconWrapper>
      );
    case IconNames.arrowUp:
      return (
        <AppIconWrapper>
          <IconArrowUp />
        </AppIconWrapper>
      );
    case IconNames.check:
      return (
        <AppIconWrapper>
          <IconCheck />
        </AppIconWrapper>
      );
    case IconNames.pending:
      return (
        <AppIconWrapper>
          <IconPending />
        </AppIconWrapper>
      );
    case IconNames.copy:
      return (
        <AppIconWrapper>
          <IconCopy />
        </AppIconWrapper>
      );
    case IconNames.dropdownSelected:
      return (
        <AppIconWrapper>
          <IconDropdownSelected />
        </AppIconWrapper>
      );
    case IconNames.dropdownUnselected:
      return (
        <AppIconWrapper>
          <IconDropdownUnselected />
        </AppIconWrapper>
      );
    case IconNames.bankTransfer:
      return (
        <AppIconWrapper>
          <IconBankTransfer />
        </AppIconWrapper>
      );
    case IconNames.coin:
      return (
        <AppIconWrapper>
          <IconCash />
        </AppIconWrapper>
      );
    case IconNames.creditCard:
      return (
        <AppIconWrapper>
          <IconCreditCard />
        </AppIconWrapper>
      );

    case IconNames.gift:
      return (
        <AppIconWrapper>
          <IconGift />
        </AppIconWrapper>
      );
    case IconNames.email:
      return (
        <AppIconWrapper>
          <IconEmailOutline />
        </AppIconWrapper>
      );

    default:
      return (
        <AppIconWrapper>
          <IconGift />
        </AppIconWrapper>
      );
  }
}
