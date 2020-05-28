import styled from "styled-components"
import media from "../../styles/media"

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  width: 100%;
  height: 600px;
  padding: 20px;
  ${media.lessThan("sm")`
    height: auto;
  `}
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
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  height: auto;
  max-width: 250px;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 350px;
  margin: 0 20px;
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
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
  color: ${({ theme }) => theme.background};
  cursor: default;
`
export const TextCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  text-align: center;
  max-width: 350px;
  margin-top: 20px;
  cursor: default;
  color: ${({ theme }) => theme.background};
  ${media.lessThan("sm")`
    padding-bottom: 60px;
    max-width: 100%;
    
  `}
`
