import styled, { css } from "@xstyled/styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 30px 80px 30px 80px;
  position: relative;
  background-color: ${({ theme }) => theme.white};
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
    background-color: ${({ theme }) => theme.purple};
    color: ${({ theme }) => theme.white};
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
      font-size: 5;
      font-weight: bold;
      margin: 10px 0;
      &:after {
        content: " ";
        width: 80%;
        margin-top: 8px;
        border-bottom: 1.5px solid ${({ theme }) => theme.white};
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
  color: ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.white};
  border: none;
  margin-right: 30px;
  font-size: 3;
  &&:hover {
    color: ${({ theme }) => theme.purple};
    border-bottom: 2px solid ${({ theme }) => theme.purple};
  }
`

export const Button = styled.button`
  width: 120px;
  height: 45px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.purple};
  color: ${props => props.theme.purple};
  font-size: 3;
  font-weight: bold;
  &&:hover {
    background-color: ${({ theme }) => theme.purple};
    color: ${({ theme }) => theme.white};
  }
`
