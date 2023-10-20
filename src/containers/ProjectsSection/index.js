import ProjectsList from '../../components/ProjectsList'

import efood from '../../assets/images/efood-miniature.png'
import contactList from '../../assets/images/contact-list-miniature.png'
import todo from '../../assets/images/todo-miniature.png'

import { ProjectsContainer, ProjectsTitle } from './styles'

const Projects = () => {
  const projectsData = [
    {
      title: 'Efood',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum sapiente necessitatibus aliquid aperiam quod placeat error earum temporibus nesciunt eius?',
      technologies: 'React, Typescript, styled-components, Redux, ESLint',
      repo: 'https://github.com/kakabosco/efood',
      deploy: 'https://efood-zeta.vercel.app/',
      image: efood
    },
    {
      title: 'Contact List',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum sapiente necessitatibus aliquid aperiam quod placeat error earum temporibus nesciunt eius?',
      technologies: 'React, Typescript, styled-components, Redux, ESLint',
      repo: 'https://github.com/kakabosco/contact-list-react',
      deploy: 'https://contact-list-react-kb.vercel.app/',
      image: contactList
    },
    {
      title: 'To-do List',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum sapiente necessitatibus aliquid aperiam quod placeat error earum temporibus nesciunt eius?',
      technologies: 'Vue, Bootstrap, JavaScript',
      repo: 'https://github.com/kakabosco/to-do-vue',
      deploy: 'https://to-do-vue-sigma.vercel.app/',
      image: todo
    }
  ]

  return (
    <ProjectsContainer as="section" id="projects">
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsList projects={projectsData} />
    </ProjectsContainer>
  )
}

export default Projects
