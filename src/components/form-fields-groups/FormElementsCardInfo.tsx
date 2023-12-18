import React from 'react';
import FormField from '../form-fields/FormField';
import { AppInputWithMaskStyled } from '../inputs/AppInputWithMask/AppInputWithMask.styled';
import { AppInputStyled } from '../inputs/common/AppInput/AppInput.styled';
import FormElementsCardDetails from './FormElementsCardDetails';
import { FormFieldsGroupStyled } from './FormFieldsGroup.styled';

export default function FormElementsCardInfo() {
  const [cardNumber, setCardNumber] = React.useState('');
  const [cardHolderName, setCardHolderName] = React.useState('');

  const [installmentSelected, setInstallmentSelected] = React.useState('');

  const handleCardNumber = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(ev.target.value);
  };

  const handleCardHolderName = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setCardHolderName(ev.target.value);
  };

  const handleOptionInstallments = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    setInstallmentSelected(ev.target.value);
  };

  return (
    <FormFieldsGroupStyled $flexDirection="column">
      <FormField labelText="Card number" id="card-number" $width="100%">
        <AppInputWithMaskStyled
          id="card-number"
          mask="9999 9999 9999 9999"
          placeholder="Enter your card number"
          value={cardNumber}
          onChange={handleCardNumber}
          required
        />
      </FormField>
      <FormElementsCardDetails />
      <FormField
        labelText="Card holder name"
        id="card-holder-name"
        $width="100%"
      >
        <AppInputStyled
          type="text"
          id="card-holder-name"
          placeholder="Enter card holder name"
          $fullWidth={true}
          value={cardHolderName}
          onChange={handleCardHolderName}
        />
      </FormField>
      <FormField
        labelText="Installments"
        id="select-installments"
        $width="100%"
      >
        {/* <AppSelect
          id="select-installments"
          name="select-installments"
          placeholder="Choose an installment"
          options={mockInstallmentsFull}
          value={installmentSelected}
          onChange={handleOptionInstallments}
          width="100%"
        /> */}
      </FormField>
    </FormFieldsGroupStyled>
  );
}
