import React from 'react';
import { Checkout } from '../types/appTypes';
import { LoadingStates } from '../helpers/constants/constants-services';
import { DbCheckout } from '../types/databaseTypes';
import {
  dbCheckout001,
  dbCheckout002,
  dbCheckout003,
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
      case 'checkout-001':
        dbCheckoutFound = dbCheckout001;
        break;
      case 'checkout-002':
        dbCheckoutFound = dbCheckout002;
        break;
      case 'checkout-003':
        dbCheckoutFound = dbCheckout003;
        break;
    }

    let checkout = mapperDbCheckoutToCheckout(dbCheckoutFound);
    setCheckout(checkout);
    setLoadingCheckout(LoadingStates.SUCCESS);
  }, [checkoutId]);

  return { checkout, loadingCheckout };
}
