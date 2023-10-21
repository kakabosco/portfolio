import Header from './containers/Header'
import Home from './components/HomeSection'
import Skills from './containers/SkillsSection'
import About from './components/AboutSection'
import Project from './containers/ProjectsSection'
import Contact from './containers/Contact'

import GlobalStyle from './styles'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Skills />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
