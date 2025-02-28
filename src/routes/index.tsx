import { useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { Fragment } from 'react';

export const AppRoutes = () => {
  const element = useRoutes([...publicRoutes, ...protectedRoutes]);

  return <Fragment>{element}</Fragment>;
};
