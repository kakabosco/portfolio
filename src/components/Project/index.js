import PropTypes from 'prop-types'

import { ReactComponent as Repository } from '../../assets/images/github.svg'
import { ReactComponent as Deploy } from '../../assets/images/deploy.svg'

import * as S from './styles'

const CardProject = ({
  title,
  description,
  technologies,
  repo,
  deploy,
  image
}) => {
  console.log('image', image)
  return (
    <S.CardContainer>
      <a href={deploy} target="_blank" rel="noreferrer">
        <S.MediaContainer>
          <S.ProjectTitle>
            <h3>{title}</h3>
          </S.ProjectTitle>
          <S.ProjectMedia $image={image} />
          <S.ProjectMediaOverlay />
        </S.MediaContainer>
      </a>
      <S.InfoContainer>
        <S.ProjectDescription>
          <p>
            <b>Description: </b>
            {description}
          </p>
          <p>
            <b>Technologies: </b>
            {technologies}
          </p>
        </S.ProjectDescription>
        <S.ProjectLinks>
          <a href={repo} target="_blank" rel="noreferrer">
            <Repository />
          </a>
          <a href={deploy} target="_blank" rel="noreferrer">
            <Deploy />
          </a>
        </S.ProjectLinks>
      </S.InfoContainer>
    </S.CardContainer>
  )
}

CardProject.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  deploy: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default CardProject
