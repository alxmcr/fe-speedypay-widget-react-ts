import { mapperDbCompanyToCompany } from '../../helpers/helpers-mappers';
import { Company } from '../../types/appTypes';
import {
  dbCompanyBetsson,
  dbCompanyFinberry,
  dbDefaultCompany,
} from '../db/mock-db-companies';

export const defaultCompany: Company =
  mapperDbCompanyToCompany(dbDefaultCompany);
export const fittersOriginal: Company =
  mapperDbCompanyToCompany(dbCompanyFinberry);
export const betsson: Company = mapperDbCompanyToCompany(dbCompanyBetsson);
export const finberry: Company = mapperDbCompanyToCompany(dbCompanyFinberry);
