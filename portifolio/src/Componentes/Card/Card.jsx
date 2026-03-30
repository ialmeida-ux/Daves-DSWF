import { useState } from 'react';
import './Card.css';
import { Children } from 'react';

const Card = ( {titulo, children} )=>{

    // const [setas, setSetas] = useState("▼")
    //▲▼
    const [aberto, setAberto] = useState(false);

    return(
        <div className="card">
            <div className="cardTitulo">
               <span> {titulo}</span>
                
                <span className={`arrow ${aberto ? 'arrowOpen' : ''}`}
                onClick={() => setAberto(!aberto)}>
                ▼
                </span>
                
            </div>

            <div className={`cardCorpo ${aberto ? 'cardCorpoOpen' : 'cardCorpoClose'}`} >

                {children}
                
            </div>
        
        </div>  
    )
}

export default Card;