import logo from '../../assets/images/logo.png'
import sun from '../../assets/images/sun.png'

import * as S from './styles'

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Logo src={logo} alt="Logo Kode by Bosco" />
      <S.LinksContainer>
        <nav>
          <S.Links>
            <S.LinkItem as="li">Home</S.LinkItem>
            <S.LinkItem as="li">Skills</S.LinkItem>
            <S.LinkItem as="li">About</S.LinkItem>
            <S.LinkItem as="li">Projects</S.LinkItem>
            <S.LinkItem as="li">Contact</S.LinkItem>
          </S.Links>
        </nav>
        <S.LanguageSelector>
          <S.LinkItem as="a">PT</S.LinkItem>
          <S.LinkItem as="span">|</S.LinkItem>
          <S.LinkItem as="a" className="selected">
            EN
          </S.LinkItem>
        </S.LanguageSelector>
        <a href="#">
          <img src={sun} alt="Trocar tema" />
        </a>
      </S.LinksContainer>
    </S.HeaderContainer>
  )
}

export default Header
