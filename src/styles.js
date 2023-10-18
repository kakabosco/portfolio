import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  offwhite: '#f8f5e8',
  black: '#282525',
  darkGreen: '#0b6f56',
  lightGreen: '#3ab156'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 24px;
    font-weight: 300;
    line-height: 1.4em;
    font-family: 'Inconsolata', monospace;
    list-style: none;
  }

  body {
    color: ${colors.black};
    background-color: ${colors.offwhite};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const Title = styled.h2`
  font-size: 96px;
  font-weight: 700;
  line-height: 1.2em;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-family: 'Jeko', sans-serif;
`

export const SecondaryTitle = styled(Title)`
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 0.05em;
`

export const TertiaryTitle = styled(Title)`
  font-size: 24px;
  font-weight: 400;
`

export default GlobalStyle
