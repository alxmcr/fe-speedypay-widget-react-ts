import { RouteObject } from 'react-router-dom';
import ChargePage from '../pages/ChargePage';
import CheckoutPage from '../pages/CheckoutPage';
import HomePage from '../pages/HomePage';
import OrderPage from '../pages/OrderPage';

export const routes: RouteObject[] = [
  {
    id: 'home-page',
    path: '/',
    element: <HomePage />,
  },
  {
    id: 'checkouts-page',
    path: '/checkouts',
    element: <CheckoutPage />,
  },
  {
    id: 'orders-page',
    path: '/orders',
    element: <OrderPage />,
  },
  {
    id: 'charge-page',
    path: '/charges',
    element: <ChargePage />,
  },
];
