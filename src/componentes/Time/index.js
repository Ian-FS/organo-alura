import Cartao from "../Cartao";
import "./Time.css";

const Time = ({ time, colaboradores, corPrimaria, corSecundaria }) => {
  return colaboradores.length > 0 ? (
    <section
      className="time"
      style={{
        backgroundImage: `url(${corSecundaria})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        margin: "60px 0px",
      }}
    >
      {/* <h3>{time.nome}</h3> */}
      <div className="cartoes">
        {colaboradores.map((colaborador) => (
          <Cartao
            style={{
              backgroundImage: `url(${corPrimaria})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "104px",
            }}
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
