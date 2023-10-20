import Header from './containers/Header'
import Home from './components/HomeSection'
import Skills from './containers/SkillsSection'
import About from './components/AboutSection'
import Project from './containers/ProjectsSection'

import GlobalStyle from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Skills />
      <About />
      <Project />
    </>
  )
}

export default App
