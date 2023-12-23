import { Order } from '../../types/appTypes';
import { dbOrder001, dbOrder002, dbOrder003 } from '../db/mock-db-orders';
import { mapperDbOrderToOrder } from '../helpers-mappers';

export const order001: Order = mapperDbOrderToOrder(dbOrder001);
export const order002: Order = mapperDbOrderToOrder(dbOrder002);
export const order003: Order = mapperDbOrderToOrder(dbOrder003);
