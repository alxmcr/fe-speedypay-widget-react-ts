import { BASE_URL_REMOTE } from '../../helpers/constants/constants-assets';
import { DbCompany } from '../../types/databaseTypes';

export const dbDefaultCompany: DbCompany = {
  co_company: 'company-default',
  co_name: 'Default company',
  co_logo_url: `${BASE_URL_REMOTE}/v1701489884/logos-react/Logo-Default.svg`,
};

export const dbFittersOriginal: DbCompany = {
  co_company: 'company-001',
  co_name: 'Fitters Original',
  co_logo_url: `${BASE_URL_REMOTE}/v1701489884/logos-react/Logo-Fitters-Originals_vikwoz.svg`,
};

export const dbCompanyBetsson: DbCompany = {
  co_company: 'company-002',
  co_name: 'Betsson',
  co_logo_url: `${BASE_URL_REMOTE}/v1701489884/logos-react/Logo-Betsson_abmpyh.svg`,
};

export const dbCompanyFinberry: DbCompany = {
  co_company: 'company-003',
  co_name: 'Finberry',
  co_logo_url: `${BASE_URL_REMOTE}/v1701489884/logos-react/Logo-Finberry_bvkv3f.svg`,
};
