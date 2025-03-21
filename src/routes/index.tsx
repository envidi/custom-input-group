import { useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { Fragment } from 'react';
import { ThemeConfig } from '~root/hooks';
interface Props {
  themeConfig: ThemeConfig;
  setThemeConfig: (args: ThemeConfig) => void;
}

export const AppRoutes = ({ setThemeConfig, themeConfig }: Props) => {
  const element = useRoutes([...publicRoutes(setThemeConfig, themeConfig), ...protectedRoutes]);

  return <Fragment>{element}</Fragment>;
};
