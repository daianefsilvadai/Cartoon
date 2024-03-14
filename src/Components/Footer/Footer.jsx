import * as S from "./Style";
import logo from "./Imagens/logo.png";
import icone1 from "./Imagens/iconegithub.png";
import icone2 from "./Imagens/iconelinkedin.png";

function Footer() {
  return (
    <S.FooterStyle>
      <S.SectionFirst>
        <S.ImgLogo src={logo} alt="" />
        <S.Ul>
          <S.Li>Sobre nós</S.Li>
          <S.Li>Produtos</S.Li>
          <S.Li>Personagens</S.Li>
        </S.Ul>
        <S.DivSecond>
          <S.ImgIcon src={icone2} alt="" />
          <S.ImgIcon src={icone1} alt="" />
        </S.DivSecond>
      </S.SectionFirst>
      <S.SectionThird>
        <h2>© 2024 Cartoon Network</h2>
      </S.SectionThird>
    </S.FooterStyle>
  );
}

export default Footer;
