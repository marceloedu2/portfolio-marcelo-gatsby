import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 0 20px;
`
export const Title = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 60px;
  font-size: 38px;
  font-weight: bolder;
  color: ${({ theme }) => theme.textColor};
`
export const SubTitle = styled.div`
  font-size: 24px;
  margin-top: 10px;
  width: 100%;
`
export const Image = styled.img`
  width: 600px;
  margin: 100px 0 10px 0;
`
