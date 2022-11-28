
export default function Jogo(props) {
    //rodar função que escolhe a palavra do array props.opcao
    const { setClicavel,
        setLetrasSelecionadas,
        setHabilitarBotao,
        setBotaoLetras,
        opcao,
        setPalavraSorteadaArray,
        palavraSorteadaArray,
        exibidoNaTela,
        setExibidoNaTela,
        imagemForca,
        cor,
        fimDeJogo,
        setFimDeJogo,
        setCor,
        setErros,
        setPalavraChute,
        setImagemForca
    } = props

    function sortearPalavra() {
       
        let sorteada
        let quantidadeDePalavras = opcao.length  //obtenho o tamanho do array   
        let indice = Math.random() * quantidadeDePalavras // obtenho um numero aleatorio entre 0 e o ultimo indice do array
        indice = Math.floor(indice)//indice do item do array sorteado
        sorteada = opcao[indice] //palavra contida no índice do array sorteado, será a da partida!
        const novoArray = Array.from(sorteada) //transforma a string sorteada em array
        setPalavraSorteadaArray(novoArray)
        const exibirVazio = []
        for (let i = 0; i < novoArray.length; i++) {
            exibirVazio.push(" _ ")
        }
        setExibidoNaTela(exibirVazio)

    }
    function escolherPalavra() {
        //se já tiver uma palavra sorteada significa que a pessoa já finalizou um jogo OU quer trocar a palavra => recomeçar
        if (palavraSorteadaArray.length != 0) {
            //recomeço do jogo voltando todos os estados para as condições iniciais
            setHabilitarBotao(true)
            setBotaoLetras(true)
            setPalavraSorteadaArray([])
            setExibidoNaTela([])
            setImagemForca("assets/forca0.png")
            setLetrasSelecionadas([])
            setClicavel("")
            setErros(0)
            setCor("")
            setFimDeJogo(false)
            setPalavraChute("")

            inicioDeJogo()
        }
        else inicioDeJogo()
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
            <button type="button" className="escolher-palavra" onClick={escolherPalavra} >Escolher palavra</button>
            <Pontilhado sendoExibido={exibidoNaTela} cor={cor} fim={fimDeJogo} /> {/* só deve ser exibido depois do clique em escolher palavra */}
        </>
    )
}

function Pontilhado(props) {
    const { cor, fim } = props

    return (
        <>
            <div className={`pontilhado ${fim ? cor : ""}`}>
                {props.sendoExibido.map((conteudo) => (<span> {conteudo} </span>))}
            </div>
        </>

    )
}
