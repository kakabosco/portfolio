import PropTypes from 'prop-types'

import { SecondaryTitle } from '../../styles'
import * as S from './styles'

const CardSkill = ({ title, description }) => {
  return (
    <S.CardContainer>
      <SecondaryTitle>{title}</SecondaryTitle>
      <S.CardDescription>{description}</S.CardDescription>
    </S.CardContainer>
  )
}

CardSkill.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default CardSkill
