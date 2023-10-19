import Header from './containers/Header'
import Home from './components/HomeSection'
import Skills from './containers/SkillsSection'
import About from './components/AboutSection'

import GlobalStyle from './styles'

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
