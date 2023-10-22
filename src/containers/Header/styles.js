import styled from 'styled-components'

import { ReactComponent as LogoSVG } from '../../assets/images/logo.svg'
import { ReactComponent as SunSVG } from '../../assets/images/sun.svg'

import { colors } from '../../styles'

export const HeaderContainer = styled.header`
  > div {
    &:first-child {
      display: flex;
      justify-content: flex-end;
      padding: 2.5vw 5vw 1.25vw;
    }

    &:nth-child(2) {
      display: flex;
      justify-content: flex-start;
      padding: 0 5vw;
    }
  }
`

export const Logo = styled(LogoSVG)`
  width: 150.6px;
  height: 64px;
  fill: ${colors.darkGreen};
`

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  a,
  span {
    font-size: 24px;
    font-weight: 500;
    color: ${colors.black};
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-family: 'Jeko', sans-serif;
  }
`

export const ThemeSwitch = styled(SunSVG)`
  width: 32px;
  height: 32px;
  fill: ${colors.black};
`

export const Sections = styled.ul`
  display: flex;
  margin-right: 48px;
  gap: 32px;
`

export const SectionItem = styled.li``

export const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  margin-right: 32px;

  span {
    margin-inline: 4px;
  }
`

export const LanguageItem = styled.a``
