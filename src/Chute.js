export default function Chute(props) {
    

    return (
        <div className="chute">
            <span>Já sei a palavra!</span>
            <input type="text" className="caixadigitacao" disabled={props.inputChute}/>
            <button className="dar-chute" disabled={props.botaoChute}>Chutar</button>
        </div>

    )
}