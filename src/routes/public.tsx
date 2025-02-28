import { RouteObject } from 'react-router';
import { FormPage } from '~root/components';

export const publicRoutes: RouteObject[] = [
  {
    path: '/form',
    element: <FormPage />,
  },
  {
    path: '/',
    element: <div tw="text-[red]">test</div>,
  },
  {
    path: '*',
    element: <div>Page not found.</div>,
  },
];
