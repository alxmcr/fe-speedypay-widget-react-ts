import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ResultsPage from '../pages/ResultsPage';
import ChargePage from '../pages/ChargePage';

export const routes: RouteObject[] = [
  {
    id: 'home-page',
    path: '/',
    element: <HomePage />,
  },
  {
    id: 'results-page',
    path: '/results',
    element: <ResultsPage />,
  },
  {
    id: 'charge-page',
    path: '/charge',
    element: <ChargePage />,
  },
];
