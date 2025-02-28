import 'twin.macro';
import { AppRoutes } from './routes';
import Providers from './providers';
import './index.css';
// import { InputGroup } from './components/shared/InputGroup';

function App() {
  return (
    <Providers>
      {/* <InputGroup /> */}
      <AppRoutes />
    </Providers>
  );
}

export default App;
