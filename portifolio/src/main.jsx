import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Portifolio from './Componentes/Portifolio/Portifolio'
// import './index.css'
import "./main.css"
import Card from './Componentes/Card/Card'
import MensagemSimples from './Desafios/Desafio01/MensagemSimples'
import SituacaoAluno from './Desafios/Desafio02/SituacaoAluno'
import Aleatorio from './Desafios/Desafio03/Aleatorio'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Portifolio titulo="Conceitos de React">
      
      <Card titulo="Desafio 01 - Passagem de paramêtro" >
        
        <MensagemSimples mensagem="Seja Bem Vindo!" />

      </Card>

      <Card titulo="Desafio 02 - CSS e If" >

        <SituacaoAluno nome="Zezin da Silva" nota={2.8} />

      </Card>

      <Card titulo="Desafio 03 - Cálculo Aleatório">
        <Aleatorio min={50} max={60} />
      </Card>

    </Portifolio>


  </StrictMode>,
)
