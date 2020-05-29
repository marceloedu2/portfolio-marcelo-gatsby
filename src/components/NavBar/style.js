import styled, { css, up, down } from "@xstyled/styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 4 5 4 5;
  position: relative;
  background-color: ${({ theme }) => theme.white};
  ${down(
    "md",
    css`
      padding: 3 4;
    `
  )}
`
export const Image = styled.img`
  width: 60px;
  ${down(
    "md",
    css`
      width: 45px;
    `
  )}
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 144px;
  height: 48px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.purple};
  font-size: 4;
  font-weight: 500;
  box-shadow: 2px 1px 2px rgba(50, 50, 50, 0.77);
  svg {
    font-size: 5;
    color: ${({ theme }) => theme.white};
    ${up(
      "md",
      css`
        display: none;
      `
    )}
  }
  ${down(
    "md",
    css`
      width: 50px;
      background-color: ${({ theme }) => theme.purple};
    `
  )}
  div {
    width: 100%;
    text-align: center;
    cursor: pointer;
    ${down(
      "md",
      css`
        display: none;
      `
    )}
  }
  &&:hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.purple};
  }
  &&:active {
    ${down(
      "md",
      css`
        color: ${({ theme }) => theme.purple};
        background-color: ${({ theme }) => theme.white};
        svg {
          color: ${({ theme }) => theme.purple};
        }
      `
    )};
  }
`
