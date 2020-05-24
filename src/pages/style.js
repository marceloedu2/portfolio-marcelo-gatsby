import styled from "styled-components"

export const Container = styled.div`
  color: ${props => props.theme.primary};
`
export const ContentIntro = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 600px;
`
export const TitleIntro = styled.div`
  font-size: 38px;
  font-weight: bolder;
  color: ${props => props.theme.textColor};
`
export const SubTitleIntro = styled.div`
  font-size: 24px;
  margin-top: 10px;
`
export const Image = styled.img`
  margin-top: 130px;
  width: 600px;
`
export const ContentDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primary};
  width: 100%;
  height: 600px;
  
`
