import { IconNames } from '../../../types/enumsApp';
import AppIcon from '../../icons/AppIcon';
import { BodyTextTwo } from '../../typography/BodyTexts';
import { TabPaymentMethodStyled } from './TabPaymentMethod.styled';

type TabPaymentMethodProps = {
  nameIcon: IconNames;
  paymentMethodName: string;
  isSelected?: boolean;
  disabled?: boolean;
};

export default function TabPaymentMethod({
  nameIcon = IconNames.email,
  paymentMethodName = '',
  isSelected = false,
  disabled = false,
}: TabPaymentMethodProps) {
  return (
    <TabPaymentMethodStyled $isSelected={isSelected} disabled={disabled}>
      <AppIcon iconName={nameIcon} />
      <BodyTextTwo>{paymentMethodName}</BodyTextTwo>
    </TabPaymentMethodStyled>
  );
}
