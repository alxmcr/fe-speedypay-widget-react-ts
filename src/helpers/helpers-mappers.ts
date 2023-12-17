import { Company, PaymentMethod } from '../types/appTypes';
import { DbCompany, DbPaymentMethod } from '../types/serviceTypes';

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

export const mapperDbCompanyToCompany = (dbCompany: DbCompany) => {
  const company: Company = {
    id: dbCompany.co_company,
    name: dbCompany.co_name,
    logo_url: dbCompany.co_logo_url,
  };

  return company;
};
