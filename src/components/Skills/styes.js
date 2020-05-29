import styled, { css, down } from "@xstyled/styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  flex-flow: row wrap;
  width: 100%;
  padding: 0 4;
  height: 750px;
  ${down(
    "md",
    css`
      height: auto;
    `
  )}
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 6;
  font-weight: bold;
  margin-top: 30px;
  text-align: center;
  height: 60px;
  margin-bottom: 5;
  color: ${props => props.theme.darkBlue};
  &:after {
    content: " ";
    width: 60px;
    margin-top: 2;
    border-bottom: 3.5px solid ${({ theme }) => theme.darkBlue};
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: self-start;
  height: 600px;
  width: 100%;
  margin-bottom: 4;
  ${down(
    "md",
    css`
      flex-flow: row wrap;
      height: auto;
    `
  )}
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 450px;
  margin: 2;
`

export const CardTitle = styled.div`
  width: 100%;
  font-size: 5;
  font-weight: 600;
  color: ${({ theme }) => theme.darkBlue};
`
export const CardDesciption = styled.div`
  max-width: 450px;
  margin-top: 3;
  h4 {
    font-size: 5;
    font-weight: 500;
    margin-bottom: 2;
    color: ${({ theme }) => theme.purple};
  }
  div {
    font-size: 4;
    margin-bottom: 2;
  }
`
