import styled, { css, down } from "@xstyled/styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 100%;
  padding: 0 20px;
  height: 550px;
  background-color: ${({ theme }) => theme.white};
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
  align-items: center;
  width: 100%;
  flex-flow: row wrap;
  margin-bottom: 50px;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 350px;
  height: 250px;
  border-radius: 10px;
  margin: 3;
`
export const Description = styled.div`
  display: none;
`
export const Link = styled.a`
  display: none;
`

export const CardContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(84, 0, 193, 0.2);
  &:hover {
    background-color: rgba(20, 28, 58, 0.9);
    ${Description} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      font-size: 4;
      font-weight: 400;
      text-align: center;
      width: 200px;
      color: ${({ theme }) => theme.white};
    }
    ${Link} {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 35px;
      border-radius: 30px;
      font-size: 3;
      font-weight: 500;
      cursor: pointer;
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme.purple};
      border: 1px solid rgba(20, 28, 58, 0.2);
      &:hover {
        border: 2px solid ${({ theme }) => theme.purple};
      }
    }
  }
`
