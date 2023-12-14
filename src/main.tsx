import React from 'react';
import ReactDOM from 'react-dom/client';
import AppProviders from './providers/AppProviders/index.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './router/routes.tsx';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  </React.StrictMode>,
);
