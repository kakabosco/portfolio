import styled from 'styled-components'
import { TertiaryTitle } from '../../styles'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 5%;
`

export const Logo = styled.img`
  width: 150px;
  height: 80px;
`

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  a {
    height: 32px;

    img {
      width: 32px;
    }
  }
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
