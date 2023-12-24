import {
  Charge,
  Checkout,
  Company,
  Customer,
  Installment,
  Order,
  PaymentMethod,
} from '../types/appTypes';
import {
  DbCharge,
  DbCheckout,
  DbCompany,
  DbCustomer,
  DbInstallment,
  DbOrder,
  DbPaymentMethod,
} from '../types/databaseTypes';

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

export const mapperDbInstallmentToInstallment = (
  dbInstallment: DbInstallment,
): Installment => {
  const installment: Installment = {
    id: dbInstallment.in_installment,
    name: dbInstallment.in_name,
    code: dbInstallment.in_code,
  };

  return installment;
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

export const mapperDbInstallmentsToInstallments = (
  dbInstallments: DbInstallment[],
) => {
  let installments: Installment[] = [];

  dbInstallments.forEach((dbInstallment) => {
    installments.push(mapperDbInstallmentToInstallment(dbInstallment));
  });

  return installments;
};

export const mapperDbCheckoutToCheckout = (dbCheckout: DbCheckout) => {
  if (dbCheckout === null) return null;

  const {
    ch_checkout,
    ch_amount_to_pay,
    ch_currency_amount,
    ch_company,
    ch_payment_methods,
    ch_installments,
  } = dbCheckout;

  const checkout: Checkout = {
    id: ch_checkout,
    amount_to_pay: ch_amount_to_pay,
    currency_amount: ch_currency_amount,
    company: mapperDbCompanyToCompany(ch_company),
    payment_methods: mapperDbPaymentMethodsToPaymentMethods(ch_payment_methods),
    installments: mapperDbInstallmentsToInstallments(ch_installments),
  };

  return checkout;
};

export const mapperDbCustomerToCustomer = (dbCustomer: DbCustomer) => {
  const customer: Customer = {
    id: dbCustomer.cu_customer,
    fullname: dbCustomer.cu_fullname,
    email: dbCustomer.cu_email,
  };

  return customer;
};

export const mapperDbOrderToOrder = (dbOrder: DbOrder) => {
  const order: Order = {
    id: dbOrder.or_order,
    payment_method: mapperDbPaymentMethodToPaymentMethod(
      dbOrder.or_payment_method,
    ),
    checkout: mapperDbCheckoutToCheckout(dbOrder.or_checkout),
    customer: mapperDbCustomerToCustomer(dbOrder.or_customer),
    expiration_date: dbOrder.or_expiration_date,
    reference_number: dbOrder.or_reference_number,
    status: dbOrder.or_status,
  };

  return order;
};

export const mapperDbChargeToCharge = (dbCharge: DbCharge) => {
  const charge: Charge = {
    id: dbCharge.cha_charge,
    payment_method: mapperDbPaymentMethodToPaymentMethod(
      dbCharge.cha_payment_method,
    ),
    checkout: mapperDbCheckoutToCheckout(dbCharge.cha_checkout),
    customer: mapperDbCustomerToCustomer(dbCharge.cha_customer),
    expiration_date: dbCharge.cha_expiration_date,
    reference_number: dbCharge.cha_reference_number,
    status: dbCharge.cha_status,
  };

  return charge;
};
