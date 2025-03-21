import { RouteObject } from 'react-router';
import { FormPage } from '~root/components';
import { ThemeConfig } from '~root/hooks';

export const publicRoutes = (setThemeConfig: (args: ThemeConfig) => void, themeConfig: ThemeConfig): RouteObject[] => [
  {
    path: '/form',
    element: <FormPage setThemeConfig={setThemeConfig} themeConfig={themeConfig} />,
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
