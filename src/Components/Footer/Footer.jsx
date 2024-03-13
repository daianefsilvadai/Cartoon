import * as S from "./Style";
import logo from "./Imagens/logo.png";
import icone1 from "./Imagens/iconegithub.png";
import icone2 from "./Imagens/iconelinkedin.png";

function Footer() {
  return (
    <S.FooterStyle>
      <img src={logo} alt="" />
      <S.SectionFirst>
        <S.DivFirst>
          <p>Sobre nós</p>
          <p>Produtos</p>
          <p>Personagens</p>
        </S.DivFirst>
        <S.DivSecond>
          <img src={icone1} alt="" />
          <img src={icone2} alt="" />
        </S.DivSecond>
      </S.SectionFirst>
    </S.FooterStyle>
  );
}

export default Footer;
