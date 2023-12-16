import { IconNames } from '../../types/enumsApp';
import TabPaymentMethod from './TabPaymentMethod';

export default function TabList() {
  return (
    <div>
      <TabPaymentMethod
        paymentMethodName="Bank transfer"
        nameIcon={IconNames.bankTransfer}
        isSelected
      />
      <TabPaymentMethod paymentMethodName="Cash" nameIcon={IconNames.coin} />
      <TabPaymentMethod
        paymentMethodName="Card"
        nameIcon={IconNames.creditCard}
      />
    </div>
  );
}
