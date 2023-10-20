import PropTypes from 'prop-types'

import CardProject from '../Project'

import { ProjectList } from './styles'

const ProjectsList = ({ projects }) => {
  if (!projects) {
    return <h3>No skills available</h3>
  }

  return (
    <ProjectList>
      {projects.map((project, index) => (
        <CardProject
          key={index}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          repo={project.repo}
          deploy={project.deploy}
          image={project.image}
        />
      ))}
    </ProjectList>
  )
}

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      technologies: PropTypes.string.isRequired,
      repo: PropTypes.string.isRequired,
      deploy: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  )
}

export default ProjectsList
