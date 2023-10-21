import styled from 'styled-components'

import { ReactComponent as Arrow } from '../../assets/images/arrow.svg'
import { Container, Title, colors } from '../../styles'

export const ContactSection = styled.section`
  color: ${colors.offwhite};
  background-color: ${colors.darkGreen};
`

export const ContactContainer = styled(Container)`
  padding-block: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ContactTitle = styled(Title)`
  margin-bottom: 48px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 800px;

  label,
  input,
  textarea {
    color: ${colors.offwhite};
  }

  label {
    font-weight: 500;
    margin-bottom: 4px;
    text-transform: uppercase;
  }

  input,
  textarea {
    height: 48px;
    padding: 0 8px;
    margin-bottom: 24px;
    outline: none;
    border: 2px solid ${colors.offwhite};
    background-color: transparent;
  }

  textarea {
    height: 200px;
    resize: none;
  }

  ::placeholder {
    color: ${colors.offwhite};
    opacity: 0.6;
  }

  ::-moz-placeholder {
    color: ${colors.offwhite};
  }
`

export const Button = styled.button`
  width: 180px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  border: 2px solid ${colors.offwhite};
  outline: none;
  color: ${colors.darkGreen};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background-color: ${colors.offwhite};
  cursor: pointer;
  transition: transform 0.4s linear;

  &:hover {
    transform: translateX(10px);
  }
`

export const SubmitArrow = styled(Arrow)`
  width: 32px;
  height: 32px;
  fill: ${colors.darkGreen};
  transform: rotate(-45deg);
`
