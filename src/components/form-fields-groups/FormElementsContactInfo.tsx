import React from 'react';
import { CustomerContext } from '../../providers/checkout/CustomerProvider/CustomerContext';
import FormField from '../form-fields/FormField';
import { AppInputStyled } from '../inputs/common/AppInput/AppInput.styled';
import { AppLayoutStyled } from '../_layouts/AppLayout.styled';

export default function FormElementsContactInfo() {
  const { setCustomer } = React.useContext(CustomerContext);
  const [email, setEmail] = React.useState('');
  const [fullname, setFullname] = React.useState('');

  const handleEmail = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(ev.target.value);
    setCustomer((prevState) => ({ ...prevState, email: ev.target.value }));
  };

  const handleFullname = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setFullname(ev.target.value);
    setCustomer((prevState) => ({ ...prevState, fullname: ev.target.value }));
  };

  return (
    <AppLayoutStyled $flexDirection="column" $gapInRem={1.25}>
      <FormField labelText="Email" id="email" $width="100%">
        <AppInputStyled
          type="email"
          id="email"
          placeholder="Enter your email"
          $fullWidth={true}
          value={email}
          onChange={handleEmail}
          required
        />
      </FormField>
      <FormField labelText="Full name" id="full-name" $width="100%">
        <AppInputStyled
          type="text"
          id="full-name"
          placeholder="Enter your first and last name"
          $fullWidth={true}
          value={fullname}
          onChange={handleFullname}
          required
        />
      </FormField>
    </AppLayoutStyled>
  );
}
