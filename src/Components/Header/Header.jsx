import logo from "../../assets/logo.png";
import controle from "../../assets/controle.png";
import relogio from "../../assets/relogio.png";
import * as S from "./Style";

function Header() {
  return (
    <S.HeaderStyle>
      <img src={logo} alt="logo cartoo" />
      <S.Section>
        <S.Div>
          <img src={controle} alt="controle de mesa de videogame" />
          <h2>JOGOS</h2>
        </S.Div>
        <S.Div>
          <img src={relogio} alt="relogio pequeno" />
          <h2>PROGRAMAÇÃO</h2>
        </S.Div>
      </S.Section>
    </S.HeaderStyle>
  );
}

export default Header;
