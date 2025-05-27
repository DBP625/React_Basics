import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import App_Component from './App_Component'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <App_Component />
  </StrictMode>,
)
