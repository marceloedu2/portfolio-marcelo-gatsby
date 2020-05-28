import styled, { css } from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 30px 80px 30px 80px;
  position: relative;
  background-color: ${({ theme }) => theme.background};
  @media (max-width: 720px) {
    padding: 10px 20px;
  }
`
export const Image = styled.img`
  width: 60px;
  @media (max-width: 720px) {
    width: 50px;
  }
`
export const Contacts = styled.div`
  padding: 0 30px;
  @media (max-width: 720px) {
    display: none;
  }
`
export const ContractsMobile = styled.div`
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    border-radius: 10px;
  }
  ul {
    position: absolute;
    left: 0;
    right: 0;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
    ${({ open }) =>
      open &&
      css`
        display: block;
      `}
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 28px;
      font-weight: bold;
      margin: 10px 0;
      &:after {
        content: " ";
        width: 80%;
        margin-top: 8px;
        border-bottom: 1.5px solid ${({ theme }) => theme.background};
      }
    }
  }
  @media (min-width: 720px) {
    display: none;
  }
`
export const Link = styled.button`
  width: 120px;
  height: 40px;
  color: ${props => props.theme.textDefault};
  background-color: ${({ theme }) => theme.background};
  border: none;
  margin-right: 30px;
  font-size: 16px;
  &&:hover {
    color: ${props => props.theme.primary};
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`

export const Button = styled.button`
  width: 120px;
  height: 45px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${props => props.theme.primary};
  font-size: 16px;
  font-weight: bold;
  &&:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
  }
`
