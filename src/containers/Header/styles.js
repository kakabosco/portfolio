import styled from 'styled-components'

import { ReactComponent as LogoSVG } from '../../assets/images/logo.svg'
import { ReactComponent as SunSVG } from '../../assets/images/sun.svg'

import { TertiaryTitle, colors } from '../../styles'

export const HeaderContainer = styled.header`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 5%;
  z-index: 99;
`

export const Logo = styled(LogoSVG)`
  fill: ${colors.darkGreen};
`

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
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

export const SectionItem = styled(TertiaryTitle)``

export const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  margin-right: 32px;

  a {
    height: 28px;
  }

  span {
    &:nth-child(2) {
      margin-inline: 4px;
    }
  }

  .selected {
    text-decoration: underline;
  }
`
