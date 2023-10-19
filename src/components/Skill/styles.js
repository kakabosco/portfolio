import styled from 'styled-components'
import { colors } from '../../styles'

export const CardContainer = styled.div`
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  border-radius: 20px;
  border: 2px solid ${colors.black};
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    color: ${colors.offwhite};
    transform: scale(1.05);
    background-color: ${colors.darkGreen};
    border: 2px solid ${colors.darkGreen};
  }
`

export const CardDescription = styled.p`
  text-transform: uppercase;
`
