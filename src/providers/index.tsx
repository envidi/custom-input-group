import React from 'react';
import { DevTools } from 'jotai-devtools';
import { Provider } from 'jotai';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { localStore } from '~root/stores';
import 'jotai-devtools/styles.css';
import { Theme, ThemeProvider } from '@mui/material';

interface Props {
  children: React.ReactNode;
  muiTheme: Theme;
}

const Providers: React.FC<Props> = ({ children, muiTheme }) => {
  const queryClient: QueryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={localStore}>
          <ThemeProvider theme={muiTheme}>
            <DevTools store={localStore} theme="dark" />
            <ReactQueryDevtools initialIsOpen={false} />
            <BrowserRouter>{children}</BrowserRouter>
            <ToastContainer />
          </ThemeProvider>
        </Provider>
      </QueryClientProvider>
    </>
  );
};

export default Providers;
