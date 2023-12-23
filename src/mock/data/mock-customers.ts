import { Customer } from '../../types/appTypes';
import {
  dbCustomer001,
  dbCustomer002,
  dbCustomer003,
} from '../db/mock-db-customers';
import { mapperDbCustomerToCustomer } from '../../helpers/helpers-mappers';

export const customer001: Customer = mapperDbCustomerToCustomer(dbCustomer001);
export const customer002: Customer = mapperDbCustomerToCustomer(dbCustomer002);
export const customer003: Customer = mapperDbCustomerToCustomer(dbCustomer003);
