import * as S from './styles'

const Header = () => {
  return (
    <S.HeaderContainer>
      <div>
        <a href="#home">
          <S.Logo />
        </a>
      </div>
      <div>
        <S.NavContainer>
          <nav>
            <S.Sections>
              <S.SectionItem>
                <a href="#home">Home</a>
              </S.SectionItem>
              <S.SectionItem>
                <a href="#skills">Skills</a>
              </S.SectionItem>
              <S.SectionItem>
                <a href="#about">About</a>
              </S.SectionItem>
              <S.SectionItem>
                <a href="#projects">Projects</a>
              </S.SectionItem>
              <S.SectionItem>
                <a href="#contact">Contact</a>
              </S.SectionItem>
            </S.Sections>
          </nav>
          <S.LanguageSelector>
            <S.LanguageItem>PT</S.LanguageItem>
            <S.LanguageItem as="span">|</S.LanguageItem>
            <S.LanguageItem>EN</S.LanguageItem>
          </S.LanguageSelector>
          <S.ThemeSwitch />
        </S.NavContainer>
      </div>
    </S.HeaderContainer>
  )
}

export default Header
