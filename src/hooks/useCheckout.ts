import React from 'react';
import { Checkout } from '../types/appTypes';
import { LoadingStates } from '../helpers/constants/constants-services';
import { DbCheckout } from '../types/databaseTypes';
import {
  CHECKOUTS_ID,
  dbCheckout001,
  dbCheckout002,
  dbCheckout003,
  dbCheckoutEmpty,
} from '../mock/db/mock-db-checkouts';
import { mapperDbCheckoutToCheckout } from '../mock/helpers-mappers';

export default function useCheckout({ checkoutId = '' }) {
  const [checkout, setCheckout] = React.useState<Checkout | null>(null);
  const [loadingCheckout, setLoadingCheckout] = React.useState(
    LoadingStates.IDLE,
  );

  React.useEffect(() => {
    setLoadingCheckout(LoadingStates.PENDING);

    let dbCheckoutFound: DbCheckout | null = null;

    switch (checkoutId) {
      case CHECKOUTS_ID.id001:
        dbCheckoutFound = dbCheckout001;
        break;
      case CHECKOUTS_ID.id002:
        dbCheckoutFound = dbCheckout002;
        break;
      case CHECKOUTS_ID.id003:
        dbCheckoutFound = dbCheckout003;
        break;
      case CHECKOUTS_ID.empty:
        dbCheckoutFound = dbCheckoutEmpty;
        break;
    }

    let checkout = mapperDbCheckoutToCheckout(dbCheckoutFound);
    setCheckout(checkout);
    setLoadingCheckout(LoadingStates.SUCCESS);
  }, [checkoutId]);

  return { checkout, loadingCheckout };
}
