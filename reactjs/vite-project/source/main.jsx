import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './input.css'

import App from './Tugas2/App.jsx'
import Pages from './Tugas4/pages/pages.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pages/>
  </StrictMode>,
)
