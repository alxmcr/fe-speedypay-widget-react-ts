import { mapperDbChargeToCharge } from '../../helpers/helpers-mappers';
import { Charge } from '../../types/appTypes';
import { dbCharge001, dbCharge002, dbCharge003 } from '../db/mock-db-charges';

export const charge001: Charge = mapperDbChargeToCharge(dbCharge001);
export const charge002: Charge = mapperDbChargeToCharge(dbCharge002);
export const charge003: Charge = mapperDbChargeToCharge(dbCharge003);
