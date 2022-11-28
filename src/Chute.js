export default function Chute(props) {
    const { botaoChute,
        inputChute,
        palavraChute,
        setPalavraChute,
        palavraSorteadaArray,
        setExibidoNaTela,
        setBotaoLetras,
        setClicavel,
        setFimDeJogo,
        setCor,
        setImagemForca
     } = props

    function chutar() {
        setExibidoNaTela(palavraSorteadaArray)
        setBotaoLetras(true)
        setClicavel("")
        setFimDeJogo(true)
        const chuteEmArray = Array.from(palavraChute)
        const comparaChute = chuteEmArray.toString()
        const comparaSorteada= palavraSorteadaArray.toString() 
       if(comparaChute === comparaSorteada){
        setCor("verde")
       }
       else{
        setCor("vermelho")
        setImagemForca("assets/forca6.png")
       }
       
        
     
    }
    return (
        <div className="chute">
            <span>Já sei a palavra!</span>
            <input value={palavraChute} onChange={(event) => (setPalavraChute(event.target.value))} type="text" className="caixadigitacao" disabled={inputChute} />
            <button className="dar-chute" disabled={botaoChute} onClick={chutar} >Chutar</button>
        </div>

    )
}