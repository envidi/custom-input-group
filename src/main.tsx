import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { checkEnvVariables } from './configs/env';
checkEnvVariables();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
