import styled from "@xstyled/styled-components"

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 0 20px;
  height: 800px;
`
export const Title = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 60px;
  font-size: 38px;
  font-weight: bolder;
  color: ${({ theme }) => theme.darkBlue};
`
export const SubTitle = styled.div`
  font-size: 24px;
  margin-top: 10px;
  width: 100%;
  color: ${({ theme }) => theme.black};
`
export const Image = styled.img`
  width: 300px;
  @media (max-width: 720px) {
    width: 100%;
  }
`
