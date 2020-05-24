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
export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.primary};
  width: 100%;
  height: 600px;
`

export const TitleAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  margin-top: 30px;
  text-align: center;
  height: 60px;
  color: ${props => props.theme.background};
  &:after {
    content: " ";
    width: 60px;
    margin-top: 8px;
    border-bottom: 3.5px solid ${props => props.theme.background};
  }
`
export const ContentAbout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 100%;
  height: 100%;
`
export const CardAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 300px;
  margin: 0 20px;
`

export  const ImageCard = styled.img`
  width: 120px;
  color: ${props => props.theme.background}
`