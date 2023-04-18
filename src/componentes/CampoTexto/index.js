import "./CampoTexto.css";

const CampoTexto = (props) => {
    const aoAlterar = (evento) => {
        props.setValor(evento.target.value);
    };

    return (
        <div className="campo-texto">
            <label>{props.label}</label>

            <input
                value={props.valor}
                onChange={aoAlterar}
                required={props.required}
                placeholder={props.texto}
            />
        </div>
    );
};

export default CampoTexto;
