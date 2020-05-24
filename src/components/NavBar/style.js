import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 30px 80px 30px 80px;
  background-color: ${props => props.theme.background};
`
export const Image = styled.img`
  width: 60px;
`
export const Contacts = styled.div`
  padding: 0 30px;
`
export const Link = styled.button`
  width: 120px;
  height: 40px;
  color: ${props => props.theme.textDefault};
  background-color: ${props => props.theme.background};
  border: none;
  margin-right: 30px;
  font-size: 16px;
  &&:hover {
    color: ${props => props.theme.primary};
    border-bottom: 2px solid ${props => props.theme.primary};
  }
`

export const Button = styled.button`
  width: 120px;
  height: 45px;
  border-radius: 30px;
  background-color: ${props => props.theme.background};
  border: 2px solid ${props => props.theme.primary};
  color: ${props => props.theme.primary};
  font-size: 16px;
  font-weight: bold;
  &&:hover {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.background};
  }
`
