import github from '../../assets/images/github.png'
import linkedin from '../../assets/images/linkedin.png'
import download from '../../assets/images/download.png'
import portraitHome from '../../assets/images/kaique-home.svg'

import { SecondaryTitle, Title } from '../../styles'
import * as S from './styles'

const Home = () => {
  return (
    <S.HomeSection>
      <S.HomeContainer>
        <S.TextContainer>
          <Title>Welcome,</Title>
          <S.Description>
            I&apos;m <SecondaryTitle as="span">KAIQUE BOSCO</SecondaryTitle> - a{' '}
            <SecondaryTitle as="span">Front-end Developer</SecondaryTitle> who
            persues the balance between functionality and design.
          </S.Description>
        </S.TextContainer>
        <S.LinksContainer>
          <S.SocialMediaLinks>
            <a
              href="https://github.com/kakabosco"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="Github" />
            </a>
            <a
              href="https://www.linkedin.com/in/kaique-bosco/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
          </S.SocialMediaLinks>
          <S.CVLink href="#">
            <img src={download} alt="Download Curriculum Vitae" />
            <span>CV</span>
          </S.CVLink>
        </S.LinksContainer>
      </S.HomeContainer>
      <img src={portraitHome} alt="Kaique's portrait home page" />
    </S.HomeSection>
  )
}

export default Home
