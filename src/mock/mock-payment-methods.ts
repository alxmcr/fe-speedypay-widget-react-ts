import { mapperDbPaymentMethodToAppPaymentMethod } from '../helpers/helpers-mappers';
import {
  BankTransferSample,
  CashSample,
  CreditCardSample,
} from './mock-db-payment-methods';

export const cashSample = mapperDbPaymentMethodToAppPaymentMethod(CashSample);
export const bankTransferSample =
  mapperDbPaymentMethodToAppPaymentMethod(BankTransferSample);
export const cardSample =
  mapperDbPaymentMethodToAppPaymentMethod(CreditCardSample);
