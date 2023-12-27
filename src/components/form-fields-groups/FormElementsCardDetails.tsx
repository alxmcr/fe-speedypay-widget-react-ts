import React from 'react';
import { CustomerContext } from '../../providers/checkout/CustomerProvider/CustomerContext';
import FormField from '../form-fields/FormField';
import { AppInputWithMaskStyled } from '../inputs/AppInputWithMask/AppInputWithMask.styled';
import { AppLayoutStyled } from '../_layouts/AppLayout.styled';

export default function FormElementsCardDetails() {
  const { setCustomer } = React.useContext(CustomerContext);
  const [expirationDate, setExpirationDate] = React.useState('');
  const [cvc, setCvc] = React.useState('');

  const handleExpirationDate = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setExpirationDate(ev.target.value);
    setCustomer((prevState) => ({
      ...prevState,
      expirationDate: ev.target.value,
    }));
  };

  const handleCvc = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setCvc(ev.target.value);
    setCustomer((prevState) => ({
      ...prevState,
      cvc: ev.target.value,
    }));
  };

  return (
    <AppLayoutStyled $flexDirection="row" $gapInRem={0.25}>
      <FormField labelText="Payment due date" id="expiration-date">
        <AppInputWithMaskStyled
          id="expiration-date"
          mask="99/99"
          placeholder="MM/DD"
          value={expirationDate}
          onChange={handleExpirationDate}
          required
        />
      </FormField>
      <FormField labelText="CVC" id="CVC">
        <AppInputWithMaskStyled
          id="CVC"
          mask="999"
          placeholder="CVC"
          value={cvc}
          onChange={handleCvc}
          required
        />
      </FormField>
    </AppLayoutStyled>
  );
}
