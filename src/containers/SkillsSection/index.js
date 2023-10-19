import SkillsList from '../../components/SkillsList'

import { Title } from '../../styles'
import { SkillsContainer } from './styles'

const Skills = () => {
  const skillsData = [
    {
      title: 'HTML',
      description: 'Structuring web pages with precision and semantics'
    },
    {
      title: 'CSS',
      description: 'Styling with BEM methodology and responsive design'
    },
    {
      title: 'JS',
      description:
        'Applying Interactivity and dynamism for immersive web experiences '
    },
    {
      title: 'TS',
      description: 'Implementing typed and secure code for robust applications'
    },
    {
      title: 'React',
      description:
        'Developing efficient and modular interfaces through componentization'
    },
    {
      title: 'Others',
      description:
        'git, sass/less, gulp/grunt, bootstrap, vue, redux, cypress...'
    }
  ]

  return (
    <SkillsContainer as="section" id="skills">
      <Title>Skills</Title>
      <SkillsList skills={skillsData} />
    </SkillsContainer>
  )
}

export default Skills
