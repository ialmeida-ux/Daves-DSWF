import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import "./main.css"
import MenuTopo from './Componentes/MenuTopo/MenuTopo'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './Views/Home/HomePage'
import LoginPage from './Views/Login/LoginPage'
import SobrePage from './Views/Sobre/SobrePage'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>    
        <MenuTopo />

        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/sobre' element={<SobrePage />} />

        </Routes>


    </BrowserRouter>
    

  </StrictMode>,
)
