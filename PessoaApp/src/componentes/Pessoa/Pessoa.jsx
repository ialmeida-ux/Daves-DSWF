import "./Pessoa.css"

// const Pessoa = ( props )=>{
//     console.log(props)
const Pessoa = ( {nome, idade, sexo, cor,
     peso, altura, children, estilo=1} )=>{

    // let pessoa = {nome: 'ze', idade: 15}
    // let pessoa1 = {...pessoa, sexo:"M"}

    let card= {
        border: "1px solid black",
        borderRadius: "10px",
        backgroundColor: cor || "#8b8888",
        width: "250px",
        height: "200px",
        margin: "10px",
        padding: "10px",
        textAlign: "left",
    }

    let imc = peso/(altura*altura)

    return(
        <div className={estilo ===2 ? "card1":""} style={card}>
            <label>Nome: {children || nome}</label>
            <br />
            <label>Idade: {idade}</label>
            <br />
            <label>Sexo: {sexo}</label>
            <br />
            <label>Peso: {peso}</label>
            <br />
            <label>Altura: {altura}</label>
            <br />
            <label>IMC: {imc}</label>
        </div>
    )
}

export default Pessoa


