export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const {clicavel, botaoLetras, setBotaoLetras, selecionadas, setSelecionadas, palavraSorteadaArray} = props
    
   

    return (
        <>
            <div className="caixa-de-botoes">
                {alfabeto.map((letra) => <Alternativa  
                key={letra} 
                item={letra} 
                botaoLetras={botaoLetras} 
                setBotaoLetras={setBotaoLetras} 
                selecionadas={selecionadas} 
                setSelecionadas ={setSelecionadas}
                palavraSorteadaArray={palavraSorteadaArray}
                clicavel = {clicavel}
                />)}

            </div>
        </>
    )
}


function Alternativa(props){

    const {clicavel, botaoLetras, item, setBotaoLetras, selecionadas, setSelecionadas, palavraSorteadaArray} = props

    function clicaLetra(letra){
        const novoSelecionadas = [...selecionadas, letra]
        setSelecionadas(novoSelecionadas)
        let verifica = palavraSorteadaArray.includes(letra)
        
        

        //verificar se tem na palavra
        //se tiver, mostrar na posição que ela está

    }
    console.log("botao letras",botaoLetras)


    return(
        <button type="button" className= {`letra ${selecionadas.includes(item) ? "" : clicavel}`} onClick={()=>clicaLetra(item)} disabled = {selecionadas.includes(item)? true : botaoLetras}>
            {item}
        </button>
    )
}
