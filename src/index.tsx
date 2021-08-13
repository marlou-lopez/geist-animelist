import { GeistProvider, CssBaseline } from '@geist-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GeistProvider>
        <CssBaseline />
        <App />
      </GeistProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);