import { Checkout, Company, PaymentMethod } from '../types/appTypes';
import { DbCheckout, DbCompany, DbPaymentMethod } from '../types/serviceTypes';

export const mapperDbPaymentMethodToPaymentMethod = (
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

export const mapperDbPaymentMethodsToPaymentMethods = (
  dbPaymentMethods: DbPaymentMethod[],
) => {
  let paymentMethods: PaymentMethod[] = [];

  dbPaymentMethods.forEach((dbPaymentMethod) => {
    paymentMethods.push(mapperDbPaymentMethodToPaymentMethod(dbPaymentMethod));
  });

  return paymentMethods;
};

export const mapperDbCheckoutToCheckout = (dbCheckout: DbCheckout) => {
  const {
    ch_checkout,
    ch_amount_to_pay,
    ch_currency_amount,
    ch_company,
    ch_payment_methods,
  } = dbCheckout;

  const checkout: Checkout = {
    id: ch_checkout,
    amount_to_pay: ch_amount_to_pay,
    currency_amount: ch_currency_amount,
    company: mapperDbCompanyToCompany(ch_company),
    payment_methods: mapperDbPaymentMethodsToPaymentMethods(ch_payment_methods),
  };

  return checkout;
};
