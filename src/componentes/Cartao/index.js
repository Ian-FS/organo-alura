import './Cartao.css'

const Cartao = ({style, imagem, nome, cargo}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: style}}>
                <img src={imagem} alt="Imagem do colaborador"/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
            
        </div>
        
    )
}

export default Cartao