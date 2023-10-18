import PropTypes from 'prop-types'
import CardSkill from '../CardSkill'
import { CardList } from './styles'

const CardSkillsList = ({ skills }) => {
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

CardSkillsList.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  )
}

export default CardSkillsList
