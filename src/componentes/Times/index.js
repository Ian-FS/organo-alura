import Time from "../Time"
import "./Times.css"

const Times = ({ colaboradores, timesInfo }) => {
    return (
        <>
            {
                timesInfo.map(time =>
                    <Time
                        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                        time={time}
                        corPrimaria={time.corPrimaria}
                        corSecundaria={time.corSecundaria}
                        key={time.nome}
                    />
                )
            }
        </>
    )
}

export default Times