export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const {
        exibidoNaTela,
        setExibidoNaTela,
        clicavel,
        setClicavel,
        botaoLetras,
        setBotaoLetras,
        selecionadas,
        setSelecionadas,
        palavraSorteadaArray,
        setPalavraSorteadaArray,
        erros,
        setErros,
        imagemForca,
        setImagemForca
    } = props



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
                    setClicavel={setClicavel}
                    exibidoNaTela={exibidoNaTela}
                    setExibidoNaTela={setExibidoNaTela}
                    setPalavraSorteadaArray={setPalavraSorteadaArray}
                    setErros={setErros}
                    erros={erros}
                    imagemForca={imagemForca}
                    setImagemForca={setImagemForca}
                />)}

            </div>
        </>
    )
}


function Alternativa(props) {

    const { exibidoNaTela,
        setExibidoNaTela,
        clicavel,
        setClicavel,
        botaoLetras,
        item,
        setBotaoLetras,
        selecionadas,
        setSelecionadas,
        palavraSorteadaArray,
        setPalavraSorteadaArray,
        setErros,
        erros,
        imagemForca,
        setImagemForca
    } = props



    function clicaLetra(letra) {
        const novoSelecionadas = [...selecionadas, letra]
        setSelecionadas(novoSelecionadas)
        if (palavraSorteadaArray.includes(letra)) letraCerta(letra)
        else letraErrada()
    }

    function letraCerta(letra) {
        const atualizaJogada = [...exibidoNaTela]
        for (let i = 0; i < palavraSorteadaArray.length; i++) {

            if (palavraSorteadaArray[i] === letra) {
                atualizaJogada[i] = letra
            }
            // else {
            //     if (atualizaJogada[i] != " _ ") { }
            //     else { atualizaJogada[i] = " _ " }
            // }
        }
        setExibidoNaTela(atualizaJogada)
    }

    function letraErrada() {
        let contador = erros
        contador = contador + 1
        setErros(contador)
        setImagemForca(`assets/forca${contador}.png`)
        if (contador == 6) finalizar()
    }

    function finalizar() {
        setExibidoNaTela(palavraSorteadaArray)
        setBotaoLetras(true)
        setClicavel("")
    }

    return (
        <button type="button" className={`letra ${selecionadas.includes(item) ? "" : clicavel}`} onClick={() => clicaLetra(item)} disabled={selecionadas.includes(item) ? true : botaoLetras}>
            {item}
        </button>
    )
}
