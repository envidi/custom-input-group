import { RouteObject } from 'react-router';
import { PrivateRoute } from '~root/components/shared';
export const protectedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <PrivateRoute element={<div>Hello world!</div>} />,
  },
];
