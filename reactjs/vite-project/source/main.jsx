import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './input.css'
import App from './Tugas2/App.jsx'
import Pages from './Tugas4/pages/pages.jsx'
import Conditional from './Tugas5/Tes/tes2.jsx'
import Daftar from './Tugas5/Tes2/tes2.jsx'
import Delivery from './Tugas5/Soal2/soalgambar2-2.jsx'
import Pesan from './Tugas5/Soal3/soalgambar3-2.jsx'
import Time from './Tugas5/Soal4/soalgambar4-2.jsx'
import Login from './Tugas5/Soal1/soalgambar1-2.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login/>
  </StrictMode>,
)
