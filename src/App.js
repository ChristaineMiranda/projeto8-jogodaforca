import React from 'react'
import Jogo from './Jogo'
import Letras from './Letras';
import palavras from './palavras';
import Chute from './Chute';

function App() {
  //Todas as variáveis de estado!
  const [desabilitado, setDesabilitado] = React.useState(true)
  const [desabilitadoLetra, setDesabilitadoLetra] = React.useState(true)
  const [palavraSorteadaArray, setPalavraSorteadaArray] = React.useState([])
  const [exibidoNaTela, setExibidoNaTela] = React.useState([])
  const [imagemForca, setImagemForca] = React.useState("assets/forca0.png")
  const [letrasSelecionadas, setLetrasSelecionadas] = React.useState([])
  const [clicavel, setClicavel] = React.useState("")
  const [erros, setErros] = React.useState(0)
  const [cor, setCor] =  React.useState("")
  const [fimDeJogo, setFimDeJogo] = React.useState(false)
  

  return (
    <>
      <Jogo
        opcao={palavras}
        botao={desabilitado}
        setHabilitarBotao={setDesabilitado}
        palavraSorteadaArray={palavraSorteadaArray}
        setPalavraSorteadaArray={setPalavraSorteadaArray}
        exibidoNaTela={exibidoNaTela}
        setExibidoNaTela={setExibidoNaTela}
        imagemForca={imagemForca}
        setImagemForca={setImagemForca}
        setBotaoLetras={setDesabilitadoLetra}
        setLetrasSelecionadas = {setLetrasSelecionadas}
        clicavel = {clicavel}
        setClicavel = {setClicavel}
        cor = {cor}
        fimDeJogo = {fimDeJogo}

      />

      <Letras
        clicavel = {clicavel}
        setClicavel = {setClicavel}
        botaoLetras={desabilitadoLetra}
        setBotaoLetras={setDesabilitadoLetra}
        selecionadas={letrasSelecionadas}
        setSelecionadas={setLetrasSelecionadas}
        palavraSorteadaArray={palavraSorteadaArray}
        setPalavraSorteadaArray = {setPalavraSorteadaArray}
        exibidoNaTela = {exibidoNaTela}
        setExibidoNaTela = {setExibidoNaTela}
        setErros = {setErros}
        erros = {erros}
        imagemForca={imagemForca}
        setImagemForca={setImagemForca}
        setCor = {setCor}
        setFimDeJogo = {setFimDeJogo}
      />
      <Chute botaoChute={desabilitado} inputChute={desabilitado} />
    </>

  )
}

export default App;
