import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { StyledEngineProvider } from '@mui/material/styles';

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
