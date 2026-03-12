import { useState } from "react";
import "./Imc.css";

const Imc = ( {titulo} ) => {

    const [vNome, setVNome] = useState("Pedrin da Silva")

    let nome = "teste";
    function muda(e){
        //console.log(e)
        setVNome(e.target.value) 
        console.log(vNome)
        // nome = e.target.value
        // console.log(nome)
    }

    return(
        <div className="containerIMC">
            <div className="tituloIMC">{titulo} - {vNome}</div>
            <div className="bodyIMC">
                
                <label>Nome</label>
                <input value={vNome} onChange={muda} />
                <label>Peso</label>
                <input />
                <label>Altura</label>
                <input />

                <button>Calcular</button>

            </div>
        </div>
    )

}

export default Imc;