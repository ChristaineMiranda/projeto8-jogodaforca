import React from 'react'
import Jogo from './Jogo'
import Letras from './Letras';
import palavras from './palavras';
import Chute from './Chute';

function App() {
  //Todas as variáveis de estado!
  const [desabilitado, setDesabilitado] = React.useState(true)
 
  return (
    <>
      <Jogo opcao = {palavras} botoes={desabilitado} habilitarBotoes={setDesabilitado}/>
      <Letras botaoLetras={desabilitado} />
      <Chute botaoChute={desabilitado} inputChute ={desabilitado}/>
    </>

  )
}

export default App;
