import { PaymentMethod } from '../types/appTypes';
import { DbPaymentMethod } from '../types/serviceTypes';

export const mapperDbPaymentMethodToAppPaymentMethod = (
  dbPaymentMethod: DbPaymentMethod,
): PaymentMethod => {
  const paymentMethod: PaymentMethod = {
    id: dbPaymentMethod.pm_payment_method,
    code: dbPaymentMethod.pm_code,
    name: dbPaymentMethod.pm_name,
    isDisabled: dbPaymentMethod.pm_is_disabled,
  };

  return paymentMethod;
};
