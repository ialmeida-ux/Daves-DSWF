
const Aleatorio = ( {min, max} ) => {

    const sorteio = (min, max)=>{
        return Math.floor(Math.random() * (max - min) + min) 
    }

    return (
        <>
        <h1>Valor Aleatório</h1>
            <div>
                Valor Minímo: {min}
            </div>
            <div>
                Valor Maxímo: {max} 
            </div> 
            <div>
                Valor escolhido: {sorteio(min, max)}
            </div>        
        </>
    )

}

export default Aleatorio