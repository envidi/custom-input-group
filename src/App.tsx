import 'twin.macro';
import { AppRoutes } from './routes';
import Providers from './providers';
import './index.css';
import { useThemeCustom } from './hooks/useTheme';

function App() {
  const { muiTheme, themeConfig, setThemeConfig } = useThemeCustom();
  return (
    <Providers muiTheme={muiTheme}>
      <AppRoutes setThemeConfig={setThemeConfig} themeConfig={themeConfig} />
    </Providers>
  );
}

export default App;
