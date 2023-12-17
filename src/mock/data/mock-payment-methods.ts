import { mapperDbPaymentMethodToAppPaymentMethod } from '../../helpers/helpers-mappers';
import {
  DbBankTransferSample,
  DbCashSample,
  DbCreditCardSample,
} from '../db/mock-db-payment-methods';

export const cashSample = mapperDbPaymentMethodToAppPaymentMethod(DbCashSample);
export const bankTransferSample =
  mapperDbPaymentMethodToAppPaymentMethod(DbBankTransferSample);
export const cardSample =
  mapperDbPaymentMethodToAppPaymentMethod(DbCreditCardSample);
