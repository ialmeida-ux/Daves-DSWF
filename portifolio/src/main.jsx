import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Portifolio from './Componentes/Portifolio/Portifolio'
// import './index.css'
import "./main.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Portifolio titulo="Conceitos de React"/>


  </StrictMode>,
)
