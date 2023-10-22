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
    list-style: none;
    font-size: 24px;
    font-weight: 300;
    line-height: 1.4em;
    font-family: 'Inconsolata', monospace;
    text-decoration: none;
    scroll-behavior: smooth;
  }

  body {
    color: ${colors.black};
    background-color: ${colors.offwhite};
  }

    ::-webkit-scrollbar {
    width: 10px;

    &-button {
      display: none;
    }

    &-track {
      border-radius: 10px;
      background: ${colors.offwhite};
    }

    &-thumb {
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.3);

      &:hover {
          background: rgba(0, 0, 0, 0.6);
        }
    }
  }
  `

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
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
