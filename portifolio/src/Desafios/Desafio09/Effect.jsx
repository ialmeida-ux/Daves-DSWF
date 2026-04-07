import { useEffect, useState } from "react";


const Effect = () =>{

    const [contador, setContador] = useState(0)
    const [mensagem, setMensagem] = useState("UseEffect")
    const [lista, setLista] = useState([])

    const addLog = (mensagem) =>{
            setLista([ ...lista, mensagem])
    }

    //1ª Sem paramêtro: executa a cada renderização de um componente
    useEffect(()=>{
        console.log("UseEffect foi executado!!!", contador, mensagem)
        //addLog("UseEffect foi executado!!!")
    })

    //2ª Com paramêtro []: todo vez que for renderizado pela primeira vez
    useEffect(()=>{
        console.log("Tela renderizada pela primeira vez!!!")
        //addLog("UseEffect foi executado!!!")
    },[])


    //3ª Com paramêtro especifico: é executadi toda vez que o estado for modificado
    useEffect(()=>{
        console.log("Contador atualziado!!!", contador)

        // setContador(contador +1 )

        return() =>{
            setMensagem(mensagem+" "+contador)
        }
        
        //addLog("UseEffect foi executado!!!")
    },[contador])


    return(
        <div >

            <div>
                <h1>{contador}</h1>
                <button onClick={()=>setContador(contador +1)}>+</button>
                <button onClick={()=>setContador(contador -1)}>-</button>
            </div>
             <div>
                <p>{mensagem}</p>
                <input type="text" value={mensagem}
                onChange={(evt)=> setMensagem(evt.target.value)} />
            </div>

            <div>
                <button onClick={()=>addLog(mensagem)} >novo Log</button>
                <button onClick={()=>setLista([])} >Limpar Log</button>
                <div>LOGS</div>
                <div style={{'height': '100px' }}>
                    { lista.length >0 &&
                    lista.map( (item, idx) =>
                        <p key={idx}>{item}</p>
                    )}
                     
                    { lista.length ==0 &&
                    <p>Sem Logs</p>}
                </div>
            </div>


        </div>
    )
}

export default Effect;