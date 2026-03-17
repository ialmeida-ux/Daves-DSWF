import { useState } from "react";
import "./Imc.css";

const Imc = ( {titulo} ) => {

    const [vNome, setVNome] = useState("Pedrin da Silva")
    const [vPeso, setVPeso] = useState(0)
    const [vAltura, setVAltura] = useState(0)
    const [imc, setImc] = useState(0)

    let nome = "teste";
    //let imc = 0
    function muda(e){
        //console.log(e)
        setVNome(e.target.value) // assincrono
        console.log(vNome)
        // nome = e.target.value
        // console.log(nome)
    }

    const calcular = () =>{
        setImc(vPeso/(vAltura*vAltura))
        alert("Calcular o IMC : "+imc)
        setVNome("")
        setVPeso("")
        setVAltura("")
    }

    return(
        <div className="containerIMC">
            <div className="tituloIMC">{titulo} - {vNome}</div>
            <div className="bodyIMC">
                
                <label>Nome</label>
                <input value={vNome} onChange={muda} />
                <label>Peso</label>
                <input type="number" value={vPeso}  
                    onChange={(e)=>{setVPeso(e.target.value)}} />
                <label>Altura</label>
                <input type="text" value={vAltura}
                onChange={(e)=>{setVAltura(e.target.value)}}  />

                <button onClick={calcular}>Calcular</button>
                <button onClick={()=>{setImc(0)}}>Limpar</button>

                {imc >0 &&
                    <h3>Resultado: {imc} </h3>
                }


            </div>
        </div>
    )

}

export default Imc;