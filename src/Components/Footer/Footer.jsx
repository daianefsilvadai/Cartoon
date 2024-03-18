import * as S from "./Style";
import logo from "./Imagens/logo.png";
import github from "./Imagens/iconegithub.png";
import linkedin from "./Imagens/iconelinkedin.png";

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
          <S.ImgIcon src={linkedin} alt="" />
          <S.ImgIcon src={github} alt="" />
        </S.DivSecond>
      </S.SectionFirst>
      <S.SectionThird>
        <h2>© 2024 Cartoon Network</h2>
      </S.SectionThird>
    </S.FooterStyle>
  );
}

export default Footer;
