

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
        erros,
        setErros,
        setImagemForca,
        setCor,
        setFimDeJogo
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
                    setErros={setErros}
                    erros={erros}
                    setImagemForca={setImagemForca}
                    setCor={setCor}
                    setFimDeJogo={setFimDeJogo}
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
        setErros,
        erros,
        setImagemForca,
        setCor,
        setFimDeJogo
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
        }
        setExibidoNaTela(atualizaJogada)
        if (atualizaJogada.toString() == palavraSorteadaArray.toString()) {
            finalizar()
            setCor("verde")
        }
    }

    function letraErrada() {
        let contador = erros
        contador = contador + 1
        setErros(contador)
        setImagemForca(`assets/forca${contador}.png`)
        if (contador == 6) {
            finalizar()
            setCor("vermelho")
        }
    }

    function finalizar() {
        setExibidoNaTela(palavraSorteadaArray)
        setBotaoLetras(true)
        setClicavel("")
        setFimDeJogo(true)
    }

    return (
        <button type="button" className={`letra ${selecionadas.includes(item) ? "" : clicavel}`} onClick={() => clicaLetra(item)} data-test="letter" disabled={selecionadas.includes(item) ? true : botaoLetras}>
            {item}
        </button>
    )
}
