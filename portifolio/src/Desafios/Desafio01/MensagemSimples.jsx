

const MensagemSimples = ( p )=>{

    const {mensagem, titulo} = p

    return(
        <div>
            <h1>{titulo}</h1>
            <span>{p.mensagem}</span>
            <span>{mensagem}</span>
        </div>
    )

}

export default MensagemSimples