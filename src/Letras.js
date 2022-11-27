export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const {exibidoNaTela, setExibidoNaTela, clicavel, botaoLetras, setBotaoLetras, selecionadas, setSelecionadas, palavraSorteadaArray, setPalavraSorteadaArray } = props



    return (
        <>
            <div className="caixa-de-botoes">
                {alfabeto.map((letra) => <Alternativa
                    key={letra}
                    item={letra}
                    botaoLetras={botaoLetras}
                    setBotaoLetras={setBotaoLetras}
                    selecionadas={selecionadas}
                    setSelecionadas={setSelecionadas}
                    palavraSorteadaArray={palavraSorteadaArray}
                    clicavel={clicavel}
                    exibidoNaTela={exibidoNaTela}
                    setExibidoNaTela={setExibidoNaTela}
                    setPalavraSorteadaArray = {setPalavraSorteadaArray}
                />)}

            </div>
        </>
    )
}


function Alternativa(props) {

    const { exibidoNaTela, setExibidoNaTela, clicavel, botaoLetras, item, setBotaoLetras, selecionadas, setSelecionadas, palavraSorteadaArray, setPalavraSorteadaArray } = props
       


    function clicaLetra(letra) {
        const novoSelecionadas = [...selecionadas, letra]
        setSelecionadas(novoSelecionadas)
        if (palavraSorteadaArray.includes(letra)) letraCerta(letra)         
            
            // letraCerta(letra, atualizaJogada)
        //verificar se tem na palavra
        //se tiver, mostrar na posição que ela está

    }
    
    function letraCerta(letra) {
        const atualizaJogada = [...exibidoNaTela]
        
        for (let i = 0; i <palavraSorteadaArray.length; i++) {
        
              if (palavraSorteadaArray[i] === letra) {
                 atualizaJogada[i]=letra
                 
            }
        else{ atualizaJogada[i] = "___"}
        

        }
         console.log("zpox",atualizaJogada)
         setExibidoNaTela(atualizaJogada)
    }

    return (
        <button type="button" className={`letra ${selecionadas.includes(item) ? "" : clicavel}`} onClick={() => clicaLetra(item)} disabled={selecionadas.includes(item) ? true : botaoLetras}>
            {item}
        </button>
    )
}
