
export default function Jogo(props) {
    //rodar função que escolhe a palavra do array props.opcao
    const { setClicavel, setLetrasSelecionadas, setHabilitarBotao, setBotaoLetras, opcao, setPalavraSorteadaArray, palavraSorteadaArray, exibidoNaTela, setExibidoNaTela, imagemForca, setImagemForca } = props

    function sortearPalavra() {
        let sorteada //
        //let sorteadaArrays = []
        let quantidadeDePalavras = opcao.length  //obtenho o tamanho do array   
        let indice = Math.random() * quantidadeDePalavras // obtenho um numero aleatorio entre 0 e o ultimo indice do array
        indice = Math.floor(indice)//indice do item do array sorteado
        sorteada = opcao[indice] //palavra contida no índice do array sorteado, será a da partida!
        const novoArray = Array.from(sorteada) //transforma a string sorteada em array
        setPalavraSorteadaArray(novoArray)
        const exibirVazio = []
        for(let i=0; i<novoArray.length; i++){
            exibirVazio.push(" _ ")
        }
        setExibidoNaTela(exibirVazio)
        console.log(novoArray)
        



    }

    function inicioDeJogo() {
        const vazio = []
        setLetrasSelecionadas(vazio)
        setHabilitarBotao(false)
        setBotaoLetras(false)
        sortearPalavra()
        setClicavel("clicavel")


    }



    return (
        <>
            <img src={imagemForca} className="forca" />
            <button type="button" className="escolher-palavra" onClick={inicioDeJogo} >Escolher palavra</button>
            <Pontilhado sendoExibido={exibidoNaTela} palavra={palavraSorteadaArray} /> {/* só deve ser exibido depois do clique em escolher palavra */}
        </>
    )
}

function Pontilhado(props) {
//<div className="pontilhado">
// {props.palavra.map((item) => <span>___  </span>)}
// </div>
    return (
        <>
            <div className="pontilhado">
                {props.sendoExibido.map((conteudo)=> (<span> {conteudo} </span>))} 
            </div>

            
        </>

    )
}
