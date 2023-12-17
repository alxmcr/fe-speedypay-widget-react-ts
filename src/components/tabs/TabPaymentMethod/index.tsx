import { IconNames } from '../../../types/enumsApp';
import AppIcon from '../../icons/AppIcon';
import { BodyTextTwo } from '../../typography/BodyTexts';
import { TabPaymentMethodStyled } from './TabPaymentMethod.styled';

type TabPaymentMethodProps = {
  nameIcon: string;
  paymentMethodName: string;
  isSelected?: boolean;
  disabled?: boolean;
  handlerClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function TabPaymentMethod({
  nameIcon = IconNames.email,
  paymentMethodName = '',
  isSelected = false,
  disabled = false,
  handlerClick,
}: TabPaymentMethodProps) {
  return (
    <TabPaymentMethodStyled
      $isSelected={isSelected}
      disabled={disabled}
      onClick={handlerClick}
    >
      <AppIcon iconName={nameIcon} />
      <BodyTextTwo>{paymentMethodName}</BodyTextTwo>
    </TabPaymentMethodStyled>
  );
}
