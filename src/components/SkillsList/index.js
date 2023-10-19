import PropTypes from 'prop-types'
import CardSkill from '../Skill'
import { CardList } from './styles'

const SkillsList = ({ skills }) => {
  if (!skills) {
    return <h3>No skills available</h3>
  }

  return (
    <CardList>
      {skills.map((skill, index) => (
        <CardSkill
          key={index}
          title={skill.title}
          description={skill.description}
        />
      ))}
    </CardList>
  )
}

SkillsList.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  )
}

export default SkillsList
