// import github from '../../assets/images/github.png'
import { ReactComponent as KaiqueHome } from '../../assets/images/kaique-home.svg'
import { ReactComponent as Github } from '../../assets/images/github.svg'
import { ReactComponent as Linkedin } from '../../assets/images/linkedin.svg'
import { ReactComponent as Download } from '../../assets/images/download.svg'

import { SecondaryTitle, Title } from '../../styles'
import * as S from './styles'

const Home = () => {
  return (
    <S.HomeSection>
      <S.HomeContainer>
        <div>
          <S.TextContainer>
            <Title>Welcome,</Title>
            <S.Description>
              I&apos;m <SecondaryTitle as="span">KAIQUE BOSCO</SecondaryTitle> -
              a <SecondaryTitle as="span">Front-end Developer</SecondaryTitle>{' '}
              who persues the balance between functionality and design.
            </S.Description>
          </S.TextContainer>
          <S.LinksContainer>
            <S.SocialMediaLinks>
              <a
                href="https://github.com/kakabosco"
                target="_blank"
                rel="noreferrer"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/kaique-bosco/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
              </a>
            </S.SocialMediaLinks>
            <S.CVLink href="#">
              <Download />
              <span>CV</span>
            </S.CVLink>
          </S.LinksContainer>
        </div>
        <KaiqueHome />
      </S.HomeContainer>
    </S.HomeSection>
  )
}

export default Home
