import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import ThemeContext from './theme/ThemeContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ScrollToTop from './components/ScroolToTop'

const queryClient = new QueryClient

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ThemeContext> */}
    <QueryClientProvider client={queryClient}>
      <ScrollToTop/>
      <App />
    </QueryClientProvider>
    {/* </ThemeContext> */}
  </React.StrictMode>,
)
