
export default function Jogo(props) {
    //rodar função que escolhe a palavra do array props.opcao
    const {habilitarBotoes, opcao} = props




    return (
        <>
            <img src="assets/forca0.png" className="forca"/>
            <button type="button" className="escolher-palavra" >Escolher palavra</button>
            
            
        </>


    )
}
