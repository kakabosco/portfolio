import logo from '../../assets/images/logo.png'
import sun from '../../assets/images/sun.png'

import * as S from './styles'

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Logo src={logo} alt="Logo Kode by Bosco" />
      <S.NavContainer>
        <nav>
          <S.Sections>
            <S.SectionItem as="li">Home</S.SectionItem>
            <S.SectionItem as="li">Skills</S.SectionItem>
            <S.SectionItem as="li">About</S.SectionItem>
            <S.SectionItem as="li">Projects</S.SectionItem>
            <S.SectionItem as="li">Contact</S.SectionItem>
          </S.Sections>
        </nav>
        <S.LanguageSelector>
          <S.SectionItem as="a">PT</S.SectionItem>
          <S.SectionItem as="span">|</S.SectionItem>
          <S.SectionItem as="a" className="selected">
            EN
          </S.SectionItem>
        </S.LanguageSelector>
        <a href="#">
          <img src={sun} alt="Trocar tema" />
        </a>
      </S.NavContainer>
    </S.HeaderContainer>
  )
}

export default Header
