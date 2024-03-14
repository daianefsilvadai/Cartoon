import logo from "../../assets/logo.png";
import controle from "../../assets/controle.png";
import relogio from "../../assets/relogio.png";
import * as S from "./Style";

function Header() {
  return (
    <S.HeaderStyle>
      <S.ImgLogo src={logo} alt="logo cartoo" />
      <S.Section>
        <S.Div>
          <S.ImgControl src={controle} alt="controle de mesa de videogame" />
          <S.Subtitle>JOGOS</S.Subtitle>
        </S.Div>
        <S.Div>
          <S.ImgClock src={relogio} alt="relogio pequeno" />
          <S.Subtitle>PROGRAMAÇÃO</S.Subtitle>
        </S.Div>
      </S.Section>
    </S.HeaderStyle>
  );
}

export default Header;
