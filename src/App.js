import Header from './containers/Header'
import Home from './components/Home'
import Skills from './containers/Skills'

import GlobalStyle from './styles'
import About from './components/About'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Skills />
      <About />
    </>
  )
}

export default App
