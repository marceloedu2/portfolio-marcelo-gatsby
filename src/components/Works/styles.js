import styled, { css, down } from "@xstyled/styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  flex-flow: row wrap;
  width: 100%;
  padding: 0 20px;
  height: 750px;
  background-color: ${({ theme }) => theme.white};
  ${down(
    "md",
    css`
      height: auto;
    `
  )}
`
