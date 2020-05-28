import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  width: 100%;
  height: 600px;
  padding: 20px 80px;
  @media (max-width: 720px) {
    height: auto;
    padding: 20px;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 32px;
  margin-top: 30px;
  text-align: center;
  height: 60px;
  margin-bottom: 60px;
  color: ${props => props.theme.background};
  cursor: default;
  &:after {
    content: " ";
    width: 60px;
    margin-top: 8px;
    border-bottom: 3.5px solid ${({ theme }) => theme.background};
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  margin: 20px 0;
  height: auto;
  width: 100%;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  min-height: 350px;
  margin: 0 20px;
  @media (max-width: 720px) {
    height: auto;
    margin: 0 0 50px 0;
  }
`
export const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: ${({ theme }) => theme.background};
`
export const TitleCard = styled.div`
  font-size: 28px;
  margin-top: 20px;
  color: ${({ theme }) => theme.background};
  cursor: default;
  @media (max-width: 720px) {
    width: 100%;
    text-align: center;
  }
`
export const TextCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-align: center;
  max-width: 350px;
  margin-top: 20px;
  cursor: default;
  color: ${({ theme }) => theme.background};
  @media (max-width: 720px) {
    padding-bottom: 60px;
    max-width: 100%;
  }
`
