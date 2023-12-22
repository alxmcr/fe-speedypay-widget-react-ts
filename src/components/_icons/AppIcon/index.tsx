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
import { AppIconStyled } from './AppIcon.styled';

type AppIconProps = {
  iconName: string;
};

export default function AppIcon({ iconName = IconNames.gift }: AppIconProps) {
  switch (iconName) {
    case IconNames.arrowDown:
      return (
        <AppIconStyled>
          <IconArrowDown />
        </AppIconStyled>
      );
    case IconNames.arrowUp:
      return (
        <AppIconStyled>
          <IconArrowUp />
        </AppIconStyled>
      );
    case IconNames.check:
      return (
        <AppIconStyled>
          <IconCheck />
        </AppIconStyled>
      );
    case IconNames.pending:
      return (
        <AppIconStyled>
          <IconPending />
        </AppIconStyled>
      );
    case IconNames.copy:
      return (
        <AppIconStyled>
          <IconCopy />
        </AppIconStyled>
      );
    case IconNames.dropdownSelected:
      return (
        <AppIconStyled>
          <IconDropdownSelected />
        </AppIconStyled>
      );
    case IconNames.dropdownUnselected:
      return (
        <AppIconStyled>
          <IconDropdownUnselected />
        </AppIconStyled>
      );
    case IconNames.bankTransfer:
      return (
        <AppIconStyled>
          <IconBankTransfer />
        </AppIconStyled>
      );
    case IconNames.coin:
      return (
        <AppIconStyled>
          <IconCoin />
        </AppIconStyled>
      );
    case IconNames.creditCard:
      return (
        <AppIconStyled>
          <IconCreditCard />
        </AppIconStyled>
      );
    case IconNames.gift:
      return (
        <AppIconStyled>
          <IconGift />
        </AppIconStyled>
      );
    case IconNames.email:
      return (
        <AppIconStyled>
          <IconEmailOutline />
        </AppIconStyled>
      );

    default:
      return (
        <AppIconStyled>
          <IconGift />
        </AppIconStyled>
      );
  }
}
