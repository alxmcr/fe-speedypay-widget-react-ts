import { IconNames } from '../../../types/enumsApp';
import IconArrowDown from '../small/IconArrowDown';
import IconArrowUp from '../small/IconArrowUp';
import IconBankTransfer from '../small/IconBankTransfer';
import IconCheck from '../small/IconCheck';
import IconCoin from '../small/IconCoin';
import IconCopy from '../small/IconCopy';
import IconCreditCard from '../small/IconCreditCard';
import IconDropdownSelected from '../small/IconDropdownSelected';
import IconDropdownUnselected from '../small/IconDropdownUnselected';
import IconEmailOutline from '../small/IconEmailOutline';
import IconGift from '../small/IconGift';
import IconPending from '../small/IconPending';
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
