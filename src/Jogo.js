
export default function Jogo(props) {
    //rodar função que escolhe a palavra do array props.opcao
    const { habilitarBotoes, opcao } = props
    function inicioDeJogo() {
        habilitarBotoes(false);
    }




    return (
        <>
            <img src="assets/forca0.png" className="forca" />
            <button type="button" className="escolher-palavra" onClick={inicioDeJogo} >Escolher palavra</button>


        </>


    )
}
