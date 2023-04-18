import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Times from './componentes/Times';

function App() {

  const times = [
    { nome: 'Programação', corPrimaria: '#57C278', corSecundaria: '#D9F7E9' },
    { nome: 'Front-End', corPrimaria: '#82CFFA', corSecundaria: '#E8F8FF' },
    { nome: 'Data Science', corPrimaria: '#A6D157', corSecundaria: '#F0F8E2' },
    { nome: 'Devops', corPrimaria: '#E06B69', corSecundaria: '#FDE7E8' },
    { nome: 'Ux e Design', corPrimaria: '#D86EBF', corSecundaria: '#FAE95F5' },
    { nome: 'Mobile', corPrimaria: '#FEBA05', corSecundaria: '#FFF5D9' },
    { nome: 'Inovação e Gestão', corPrimaria: '#FF8A29', corSecundaria: '#FFEEDF' }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const adicionaColaboradorLista = colaborador => {
    setColaboradores([...colaboradores, colaborador])
    console.log([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={colaborador => adicionaColaboradorLista(colaborador)}
        nomesLista={times.map(time => time.nome)}
      />
      <Times timesInfo={times} colaboradores={colaboradores} />
      <Rodape/>
    </div>
  );
}

export default App;