import { mapperDbCompanyToCompany } from '../helpers-mappers';
import { Company } from '../../types/appTypes';
import { dbCompanyBetsson, dbCompanyFinberry } from '../db/mock-db-companies';

export const fittersOriginal: Company =
  mapperDbCompanyToCompany(dbCompanyFinberry);
export const betsson: Company = mapperDbCompanyToCompany(dbCompanyBetsson);
export const finberry: Company = mapperDbCompanyToCompany(dbCompanyFinberry);
