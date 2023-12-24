import useCharge from '../../../hooks/useCharge';
import { CHARGES_ID } from '../../../mock/db/mock-db-charges';
import { ChargeContext, ChargeContextData } from './ChargeContext';

type ChargeProviderProps = {
  children: React.ReactNode;
};

export default function ChargeProvider({ children }: ChargeProviderProps) {
  const { charge, loadingCharge } = useCharge({
    chargeId: CHARGES_ID.id003,
  });

  const value: ChargeContextData = {
    charge,
    loadingCharge,
    errorCharge: null,
  };

  return (
    <ChargeContext.Provider value={value}>{children}</ChargeContext.Provider>
  );
}
