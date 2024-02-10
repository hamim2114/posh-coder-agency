import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import ThemeContext from './theme/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ThemeContext> */}
      <App />
    {/* </ThemeContext> */}
  </React.StrictMode>,
)
