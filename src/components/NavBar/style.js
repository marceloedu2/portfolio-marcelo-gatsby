import styled, { css, useUp, useDown } from "@xstyled/styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 4 5 4 5;
  position: relative;
  background-color: ${({ theme }) => theme.white};
  ${useDown(
    "md",
    css`
      padding: 3 4;
    `
  )}
`
export const Image = styled.img`
  width: 60px;
  @media (max-width: 720px) {
    
  }
  ${useDown(
    "md",
    css`
      width: 45px;
    `
  )}
`
export const Contacts = styled.div`
  padding: 0 4;
  ${useDown(
    "md",
    css`
      display: none;
    `
  )}
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
    border-radius: 4;
  }
  ul {
    position: absolute;
    left: 0;
    right: 0;
    padding: 3 4;
    margin: 3;
    border-radius: 10px;
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
      margin: 2 0;
      &:after {
        content: " ";
        width: 80%;
        margin-top: 2;
        border-bottom: 1.5px solid ${({ theme }) => theme.white};
      }
    }
  }
  ${useUp(
    "md",
    css`
      display: none;
    `
  )}
`
export const Link = styled.button`
  width: 144px;
  height: 48px;
  color: ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.white};
  border: none;
  margin-right: 4;
  font-size: 4;
  &&:hover {
    color: ${({ theme }) => theme.purple};
    border-bottom: 2px solid ${({ theme }) => theme.purple};
  }
`

export const Button = styled.button`
  width: 144px;
  height: 48px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.purple};
  color: ${props => props.theme.purple};
  font-size: 4;
  font-weight: 500;
  &&:hover {
    background-color: ${({ theme }) => theme.purple};
    color: ${({ theme }) => theme.white};
  }
`
