import styled from "styled-components"

export const ContentIntro = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 600px;
`
export const TitleIntro = styled.div`
  margin-top: 60px;
  font-size: 38px;
  font-weight: bolder;
  color: ${props => props.theme.textColor};
`
export const SubTitleIntro = styled.div`
  font-size: 24px;
  margin-top: 10px;
`
export const Image = styled.img`
  width: 600px;
  margin-top: 30px;
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
