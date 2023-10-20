import styled from 'styled-components'

import { colors } from '../../styles'

export const CardContainer = styled.div`
  padding: 24px;
  display: flex;
  gap: 24px;
  border-radius: 20px;
  border: 2px solid ${colors.black};
`

export const ProjectTitle = styled.div`
  position: absolute;
  top: 151px;
  left: 10%;
  opacity: 0;
  width: 80%;
  padding-block: 4px;
  border-radius: 20px;
  border: 2px solid ${colors.black};
  background-color: ${colors.offwhite};
  transition: opacity 0.5s ease-in-out;
  z-index: 1;

  h3 {
    font-weight: 700;
    color: ${colors.black};
    text-transform: uppercase;
    text-align: center;
  }
`

export const ProjectMedia = styled.div`
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  border-radius: 18px;
`

export const ProjectMediaOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background-color: ${colors.darkGreen};
  transition: opacity 0.5s ease-in-out;
`

export const MediaContainer = styled.div`
  position: relative;
  min-width: 400px;
  height: 352px;
  border-radius: 20px;
  border: 2px solid ${colors.black};
  cursor: pointer;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.03);

    ${ProjectTitle} {
      opacity: 1;
    }

    ${ProjectMediaOverlay} {
      opacity: 0.9;
    }
  }
`

export const InfoContainer = styled.div`
  padding-block: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  b {
    font-weight: 700;
  }
`

export const ProjectDescription = styled.div`
  p {
    margin-bottom: 24px;
  }
`

export const ProjectLinks = styled.div`
  display: flex;
  gap: 16px;

  svg {
    width: 32px;
    height: 32px;
    fill: ${colors.black};
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
      fill: ${colors.darkGreen};
      transform: scale(1.2);
    }
  }
`
