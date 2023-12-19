import React from 'react';
import FormCheckout from '../../components/forms/FormCheckout';
import HeaderList from '../../components/headers/HeaderList';
import ThemeModeToggler from '../../components/toggles/ThemeModeToggler';
import { CheckoutContext } from '../../providers/checkout/CheckoutProvider/CheckoutContext';

export default function HomePage() {
  const { checkout } = React.useContext(CheckoutContext);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <ThemeModeToggler />
      <HeaderList />
      <FormCheckout checkout={checkout} />
    </div>
  );
}
