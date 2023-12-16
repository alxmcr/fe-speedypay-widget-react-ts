import { IconNames } from '../../../types/enumsApp';
import AppIcon from '../../icons/AppIcon';
import { BodyTextTwo } from '../../typography/BodyTexts';
import { TabPaymentMethodStyled } from './TabPaymentMethod.styled';

type TabPaymentMethodProps = {
  nameIcon: IconNames;
  paymentMethodName: string;
  isSelected?: boolean;
};

export default function TabPaymentMethod({
  nameIcon = IconNames.email,
  paymentMethodName = '',
  isSelected = false,
}: TabPaymentMethodProps) {
  return (
    <TabPaymentMethodStyled $isSelected={isSelected}>
      <AppIcon iconName={nameIcon} />
      <BodyTextTwo>{paymentMethodName}</BodyTextTwo>
    </TabPaymentMethodStyled>
  );
}
