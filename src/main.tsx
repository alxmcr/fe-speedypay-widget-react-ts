import React from 'react';
import ReactDOM from 'react-dom/client';
import PersonalizationProviders from './providers/PersonalizationProviders/index.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './router/routes.tsx';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PersonalizationProviders>
      <RouterProvider router={router} />
    </PersonalizationProviders>
  </React.StrictMode>,
);
