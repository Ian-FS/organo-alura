import Cartao from '../Cartao'
import './Time.css'

const Time = ({ time, colaboradores, corPrimaria, corSecundaria }) => {
    return (
        (colaboradores.length > 0) ? 
        <section className='time' style={{ backgroundColor: corSecundaria }}>
            <h3>
                {time.nome}
            </h3>
            <div className='cartoes'>
                {
                    colaboradores.map(colaborador =>
                        <Cartao
                            style={corPrimaria}
                            key={colaborador.nome}
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                        />
                    )
                }
            </div>
        </section>

        :''
    )
}

export default Time