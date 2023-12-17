import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CheckoutProviders from './providers/checkout/CheckoutProviders/index.tsx';
import PersonalizationProviders from './providers/personalization/PersonalizationProviders/index.tsx';
import { routes } from './router/routes.tsx';
import { GlobalStyles } from './styles/globalStyles.ts';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PersonalizationProviders>
      <CheckoutProviders>
        <GlobalStyles />
        <RouterProvider router={router} />
      </CheckoutProviders>
    </PersonalizationProviders>
  </React.StrictMode>,
);
