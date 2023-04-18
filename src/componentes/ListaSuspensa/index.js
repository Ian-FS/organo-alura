import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
    const aoSelecionar = (evento) => {
        props.setValor(evento.target.value);
    };

    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>

            <select onChange={aoSelecionar} required={props.required}>
                <option/>
                {props.nomeTimesLista.map((nomeTime) => {
                    return <option key={nomeTime}>{nomeTime}</option>;
                })}
            </select>
        </div>
    );
};

export default ListaSuspensa;
