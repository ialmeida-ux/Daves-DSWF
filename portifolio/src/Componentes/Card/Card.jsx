import { useState } from 'react';
import './Card.css';

const Card = ( {titulo} )=>{

    const [setas, setSetas] = useState("▼")
    //▲▼

    return(
        <div className="card">
            <div className="cardTitulo">
                {titulo}
                <label 
                onClick={ ()=>{ setSetas(setas === "▼"? "▲":"▼")}}
                >{setas}</label>
                
            </div>

            <div className="cardCorpo">

                teste
            </div>
        
        </div>  
    )
}

export default Card;