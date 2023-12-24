import React from 'react';
import { LoadingStates } from '../helpers/constants/constants-services';
import {
    mapperDbChargeToCharge
} from '../helpers/helpers-mappers';
import { CHARGES_ID, dbCharge001, dbCharge002, dbCharge003 } from '../mock/db/mock-db-charges';
import { Charge } from '../types/appTypes';
import { DbCharge } from '../types/databaseTypes';

export default function useCharge({ chargeId = '' }) {
  const [charge, setCharge] = React.useState<Charge | null>(null);
  const [loadingCharge, setLoadingCharge] = React.useState(LoadingStates.IDLE);

  React.useEffect(() => {
    setLoadingCharge(LoadingStates.PENDING);

    let dbChargeFound: DbCharge | null = null;

    switch (chargeId) {
      case CHARGES_ID.id001:
        dbChargeFound = dbCharge001;
        break;
      case CHARGES_ID.id002:
        dbChargeFound = dbCharge002;
        break;
      case CHARGES_ID.id003:
        dbChargeFound = dbCharge003;
        break;
      default:
        dbChargeFound = dbCharge001;
        break;
    }

    let charge =
      dbChargeFound !== null ? mapperDbChargeToCharge(dbChargeFound) : null;
    setCharge(charge);
    setLoadingCharge(LoadingStates.SUCCESS);
  }, [chargeId]);

  return { charge, loadingCharge };
}
