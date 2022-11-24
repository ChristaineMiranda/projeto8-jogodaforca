export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return (
        <>
            <div className="caixa-de-botoes">
                {alfabeto.map((letra) => <Alternativa key={letra} item={letra} botao={props.botaoLetras}/>)}

            </div>
        </>
    )
}


function Alternativa(props){

    return(
        <button type="button" className="letra" disabled={props.botaoLetras}>
            {props.item}
        </button>
    )
}