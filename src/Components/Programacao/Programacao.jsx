import { useState } from "react";
import * as S from "./Style.jsx";
import dexter from "./Imagens/dexter.png";
import vaca from "./Imagens/vaca.png";
import dudu from "./Imagens/dudu.png";
import coragem from "./Imagens/coragem.png";
import jorel from "./Imagens/jorel.png";
import monica from "./Imagens/monica.png";
import steven from "./Imagens/steven.png";
import billy from "./Imagens/billy.png";

//array de objeto.
function Programacao() {
  const [desenhos, setDesenhos] = useState([
    {
      hora: "7:00h",
      nome: "O LABORATÓRIO DE DEXTER",
      imagem: dexter,
      desenhoManha: true,
    },
    {
      hora: "8:00h",
      nome: "A VACA E O FRANGO",
      imagem: vaca,
      desenhoManha: true,
    },
    { hora: "9:00h", nome: "DU, DUDU E EDU", imagem: dudu, desenhoManha: true },
    {
      hora: "10:00h",
      nome: "CORAGEM, O CÃO COVARDE",
      imagem: coragem,
      desenhoManha: true,
    },
    {
      hora: "11:00h",
      nome: "IRMÃO DO JOREL",
      imagem: jorel,
      desenhoManha: true,
    },
    {
      hora: "12:00h",
      nome: "TURMA DA MÔNICA JOVEM",
      imagem: monica,
      desenhoManha: false,
    },
    {
      hora: "13:00h",
      nome: "STEVEN UNIVERSO",
      imagem: steven,
      desenhoManha: false,
    },
    {
      hora: "14:00h",
      nome: "BILLY E MANDY",
      imagem: billy,
      desenhoManha: false,
    },
  ]);

  const desenhoAntesMeioDia = desenhos.filter(
    (item) => item.desenhoManha === true
  );

  return (
    <>
      <S.Section>
        {desenhos.map((item) => (
          <S.Card key={item.id}>
            <S.H3Card> {item.nome}</S.H3Card>
            <S.H3Card>{item.hora}</S.H3Card>
            <S.ImgCard src={item.imagem} alt="" />
          </S.Card>
        ))}
      </S.Section>

      <S.SectionSecond>
        <S.H2Second>Desenhos da Manhã</S.H2Second>

        {desenhoAntesMeioDia.map((item) => (
          <S.CardSecond key={item.id}>
            <S.H3Second> {item.nome} </S.H3Second>
            <S.H3Second> {item.hora} </S.H3Second>
            <S.ImgCardSecond src={item.imagem} alt={item.nome} />
          </S.CardSecond>
        ))}
      </S.SectionSecond>
    </>
  );
}

export default Programacao;
