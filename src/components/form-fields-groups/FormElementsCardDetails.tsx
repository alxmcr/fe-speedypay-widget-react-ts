import React from 'react';
import FormField from '../form-fields/FormField';
import { AppInputWithMaskStyled } from '../inputs/AppInputWithMask/AppInputWithMask.styled';
import { FormFieldsGroupRowStyled } from './FormFieldsGroupRow.styled';

export default function FormElementsCardDetails() {
  const [expirationDate, setExpirationDate] = React.useState('');
  const [cvc, setCvc] = React.useState('');

  const handleExpirationDate = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setExpirationDate(ev.target.value);
  };

  const handleCvc = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setCvc(ev.target.value);
  };

  return (
    <FormFieldsGroupRowStyled>
      <FormField labelText="Expiration date" id="expiration-date">
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
    </FormFieldsGroupRowStyled>
  );
}
