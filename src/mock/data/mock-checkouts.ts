import {
  dbCheckout001,
  dbCheckout002,
  dbCheckout003,
} from '../db/mock-db-checkouts';
import { mapperDbCheckoutToCheckout } from '../helpers-mappers';

export const checkout001 = mapperDbCheckoutToCheckout(dbCheckout001);
export const checkout002 = mapperDbCheckoutToCheckout(dbCheckout002);
export const checkout003 = mapperDbCheckoutToCheckout(dbCheckout003);
