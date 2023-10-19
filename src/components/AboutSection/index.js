import { ReactComponent as KaiqueAboutSVG } from '../../assets/images/kaique-about.svg'

import { Title } from '../../styles'
import * as S from './styles'

const About = () => {
  return (
    <S.AboutContainer as="section" id="about">
      <Title>About</Title>
      <S.AboutContent>
        <S.AboutCardWrapper>
          <S.AboutCardText>
            <p>
              Here, I&apos;ll <b>share</b> a bit more <b>about myself</b>! With
              a<strong> foundation in Mechanical Engineering</strong>, it&apos;s
              in
              <strong> software development</strong> that I{' '}
              <b>truly found my calling</b>. In this field, I fell I can{' '}
              <strong>merge my engineering analytical skills</strong> with my
              <strong> excitement for technology</strong>. I{' '}
              <b>value clarity, structure, and logic</b> in my work, mirroring
              my learning style.
            </p>
            <p>
              In my <b>leisure time</b>, I enjoy watching a{' '}
              <b>good movie or series with my girlfriend</b> or having a{' '}
              <b>nice meal</b>. Additionally, I enjoy{' '}
              <b>taking walks outdoors, working out, playing Valorant</b>, or
              immersing myself in a <b>variety of music genres</b> such as{' '}
              <b>R&B</b>, <b>Blues</b>, and <b>Indie</b>. I{' '}
              <b>aim for balance</b> in all that I undertake, and these leisure
              activities <b>help maintain my physical and mental well-being</b>.
            </p>
            <p>
              Despite my <strong>calm nature</strong>, I frequently find myself
              in
              <strong>
                {' '}
                leadership or authoritative roles in team endeavors
              </strong>{' '}
              - and, just between us, I truly relish it.
            </p>
            <p>
              This is <b>just a brief snapshot</b> of who I am. I believe{' '}
              <b>
                we are far too intricate to be encapsulated in a few lines but
                it&apos;s a worthy introduction
              </b>
              . I hope that, after seeing this overview of myself, you{' '}
              <strong>
                feel inclined to get in touch and share experiences.
              </strong>
            </p>
          </S.AboutCardText>
        </S.AboutCardWrapper>
        <S.AboutImageWrapper>
          <S.ImageCard>
            <KaiqueAboutSVG />
          </S.ImageCard>
        </S.AboutImageWrapper>
      </S.AboutContent>
    </S.AboutContainer>
  )
}

export default About
