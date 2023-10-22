import styled from 'styled-components'

import { Container, SecondaryTitle, colors } from '../../styles'

export const HomeSection = styled.section``

export const HomeContainer = styled(Container)`
  min-height: calc(100vh - 170px);
  max-height: calc(100vh - 170px);
  display: flex;
  align-items: center;
  gap: 48px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  > svg {
    width: 550px;
    height: 788px;
    fill: ${colors.black};
    overflow: visible;
  }
`

export const TextContainer = styled.div`
  max-width: 620px;
  width: 100%;
`

export const Description = styled.p`
  width: 580px;
  font-size: 48px;

  ${SecondaryTitle} {
    font-weight: 700;
    font-family: 'Jeko', sans-serif;
    color: ${colors.darkGreen};

    &:nth-child(2) {
      text-transform: none;
      font-weight: 400;
    }
  }
`

export const LinksContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 48px;

  a {
    transition: transform 0.3s linear;

    &:hover {
      transform: scale(1.1);
    }
  }
`

export const SocialMediaLinks = styled.div`
  display: flex;
  gap: 32px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background-color: ${colors.darkGreen};
    border-radius: 50%;

    svg {
      width: 32px;
      height: 32px;
      fill: ${colors.offwhite};
    }
  }
`

export const CVLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 48px;
  padding-inline: 16px;
  border-radius: 30px;
  background-color: ${colors.darkGreen};
  text-decoration: none;

  svg {
    width: 24px;
    height: 24px;
    fill: ${colors.offwhite};
  }

  span {
    line-height: 1;
    font-weight: 700;
    color: ${colors.offwhite};
    font-family: 'Jeko', sans-serif;
  }
`
