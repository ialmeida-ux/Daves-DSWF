import { useState } from "react"
import "./Portifolio.css"
import Card from "../Card/Card"

const Portifolio = ( {titulo, children} )=>{

    const [tema, setTema] = useState("claro")

    return(
        <div className={ 'containerPortifolio '
        +(tema === "claro" ? "corContainerClaro":"corContainerEscuro")}>

            <div className={ 'tituloPortifolio '
        +(tema === "claro" ? "corTituloClaro":"corTituloEscuro")}>
               <label>{titulo}</label> 
               <div>
                <input type="checkbox" 
                onClick={ ()=> setTema(tema === "claro" ? "escuro" : "claro")} 
                /> Escuro
               </div>
               
            </div>

            <div className="corpoPortifolio">

                {children}
                
            </div>


        </div>
    )

}

export default Portifolio   
