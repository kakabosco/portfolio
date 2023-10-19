import styled from 'styled-components'

import { colors } from '../../styles'
import { SkillsContainer } from '../../containers/Skills/styles'

export const AboutContainer = styled(SkillsContainer)``

export const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
`

export const AboutCardWrapper = styled.div`
  height: 660px;
  width: 600px;
  padding: 24px;
  overflow: hidden;
  position: relative;
  border-radius: 20px;
  border: 2px solid ${colors.black};
`

export const AboutCardText = styled.div`
  width: calc(100% + 20px);
  height: 100%;
  overflow-y: scroll;
  padding-right: 10px;

  b,
  strong {
    font-weight: 700;
  }
`

export const AboutImageWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ImageCard = styled.div`
  display: flex;
  justify-content: center;
  width: 375px;
  height: 480px;
  overflow: hidden;
  border-radius: 20px;
  border: 2px solid ${colors.black};
  box-shadow: 16px -16px 4px rgba(40, 37, 37, 0.7);

  img {
    width: 480px;
    height: 480px;
  }
`
