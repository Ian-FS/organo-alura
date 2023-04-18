import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Times from "./componentes/Times";

function App() {
  const times = [
    { nome: "Mystic", corPrimaria: "/imagens/mystic-banner.png", corSecundaria: "/imagens/mystic-team.png" },
    { nome: "Valor", corPrimaria: "/imagens/valor-banner.png", corSecundaria: "/imagens/valor-team.png" },
    {
      nome: "Instinct",
      corPrimaria: "/imagens/instinct-banner.png",
      corSecundaria: "/imagens/instinct-team.png",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const adicionaColaboradorLista = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
    console.log([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) => adicionaColaboradorLista(colaborador)}
        nomesLista={times.map((time) => time.nome)}
      />
      <Times timesInfo={times} colaboradores={colaboradores} />
      <Rodape />
    </div>
  );
}

export default App;
