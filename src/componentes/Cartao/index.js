import "./Cartao.css";

const Cartao = ({ imagem, nome, cargo, style }) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={style}>
        <img src={imagem} alt="Imagem do colaborador" />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Cartao;
