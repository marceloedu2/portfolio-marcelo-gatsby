import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  flex-flow: row wrap;
  width: 100%;
  padding: 0 20px;
  height: 750px;
  border: 1px solid orange;
  @media (max-width: 720px) {
    height: auto;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 32px;
  font-weight: bold;
  margin-top: 30px;
  text-align: center;
  height: 60px;
  margin-bottom: 60px;
  color: ${props => props.theme.textColor};
  &:after {
    content: " ";
    width: 60px;
    margin-top: 8px;
    border-bottom: 3.5px solid ${({ theme }) => theme.textColor};
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: self-start;
  height: 600px;
  width: 100%;
  border: 1px solid red;
  margin-bottom: 20px;
  @media (max-width: 720px) {
    flex-flow: row wrap;
    height: auto;
  }
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 450px;
  border: 1px solid blue;
`
