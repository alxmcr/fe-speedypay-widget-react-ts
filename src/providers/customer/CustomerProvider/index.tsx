import { CustomerContext, CustomerContextData } from './CustomerContext';

type CustomerProviderProps = {
  children: React.ReactNode;
};

export default function CustomerProvider({ children }: CustomerProviderProps) {

  
  const value: CustomerContextData = {
    customer: {
      fullname: '',
      email: '',
      cardNumber: '',
      expirationDate: '',
      cvc: '',
      cardHolderName: '',
      installments: '',
    },
  };

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
}
