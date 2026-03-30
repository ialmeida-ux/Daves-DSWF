

const SituacaoAluno = ( {nome, nota} )=>{
//    const sit = (nota >= 7)? "aprovado" : "reprovado" 

//    if (nota >= 7){
//     let sit = "aprovado"
//    }else{
//     let sit = "reprovado"
//    }

    const negrito = {
        fontWeight: 'bold'
    }
    return(
        <div>
            <h1>Situação do Aluno</h1>
            <p> <span style={{fontWeight: 'bold'}}>{nome} </span> 
            tem a nota <span style={negrito}>{nota} </span> 
            <span style={negrito}>{ (nota >= 7)? 'Aprovado' : 'Reprovado'} </span>
            </p>
        </div>
    )

}

export default SituacaoAluno