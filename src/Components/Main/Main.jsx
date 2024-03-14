import scooby from "./Imagens/scooby.png";
import ben10 from "./Imagens/ben10.png";
import looneytunes from "./Imagens/looneytunes.png";
import gumball from "./Imagens/gumball.png";
import meninas from "./Imagens/meninas.png";
import tomjerry from "./Imagens/tomjerry.png";
import { useState } from "react";
import * as S from "./Style";
import Programacao from "../Programacao/Programacao.jsx";

// segunda section com map
function Main() {
  const [galeria, setGaleria] = useState([gumball, meninas, tomjerry]);
  return (
    <main>
      <S.SectionFirst>
        <S.ImgFirst src={scooby} alt="" />
        <S.ImgFirst src={ben10} alt="" />
        <S.ImgFirst src={looneytunes} alt="" />
      </S.SectionFirst>

      <S.SectionSecond>
        {galeria.map((item) => (
          <S.ImgSecond src={item} key={item.id} alt="" />
        ))}
      </S.SectionSecond>

      <Programacao />
    </main>
  );
}

export default Main;
