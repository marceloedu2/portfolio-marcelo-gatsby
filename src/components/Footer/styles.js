import styled, { down, up, css } from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.purple};
  width: 100%;
  height: 500px;
`
export const ContentImage = styled.div`
  display: flex;
  flex: 1 0  100%;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  height: 60px;
`

export const ContentButton = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 144px;
    height: 48px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.purple};
    border: 2px solid ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.white};
    font-size: 18px;
    font-weight: 500;
    box-shadow: 2px 1px 2px rgba(50, 50, 50, 0.77);
  }
`
export const ContentContact = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: auto;
  li {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.white};
    svg {
      color: ${({ theme }) => theme.white};
      font-size: 30px;
      margin: 0 10px;
    }
  }
`
