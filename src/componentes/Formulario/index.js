import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();

    props.aoColaboradorCadastrado({
      nome,
      tipo,
      imagem,
      time,
    });

    setNome("");
    setTipo("");
    setImagem("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do Pokémon</h2>

        <CampoTexto valor={nome} setValor={setNome} required={true} label="Nome" texto="Digite seu Nome..." />

        <CampoTexto valor={tipo} setValor={setTipo} required={true} label="Tipo" texto="Digite seu Tipo..." />

        <CampoTexto valor={imagem} setValor={setImagem} label="Imagem" texto="Digite o endereço de imagem..." />

        <ListaSuspensa setValor={setTime} required={true} label="Time" nomeTimesLista={props.nomesLista} />

        <Botao texto="Criar Card" />
      </form>
    </section>
  );
};

export default Formulario;
