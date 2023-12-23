import {
  DbBankTransferSample,
  DbCashSample,
  DbCreditCardSample,
} from '../db/mock-db-payment-methods';
import { mapperDbPaymentMethodToPaymentMethod } from '../../helpers/helpers-mappers';

export const cashSample = mapperDbPaymentMethodToPaymentMethod(DbCashSample);
export const bankTransferSample =
  mapperDbPaymentMethodToPaymentMethod(DbBankTransferSample);
export const cardSample =
  mapperDbPaymentMethodToPaymentMethod(DbCreditCardSample);
