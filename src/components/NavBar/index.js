import React, { useState } from "react"
import {
  Button,
  Contacts,
  Container,
  ContractsMobile,
  Image,
  Link,
} from "./style"
import { FiAlignRight, FiX } from "react-icons/fi"
import Theme from "../../styles/colors"

const NavBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <Container>
      <Image src={require("../../assets/icon.png")} alt="logo" />
      <Contacts>
        <Link>Sobre</Link>
        <Button>Contatos</Button>
      </Contacts>
      <ContractsMobile>
        <button
          onClick={() => {
            setOpen(!open)
          }}
        >
          {!open ? (
            <FiAlignRight open={open} size={60} color={Theme.primary} />
          ) : (
            <FiX open={open} size={60} color={Theme.primary} />
          )}
        </button>
        {open && (
          <>
            <ul>
              <li>Sobre</li>
              <li>Contatos</li>
              <li>Contatos</li>
              <li>Contatos</li>
              <li>Contatos</li>
            </ul>
          </>
        )}
      </ContractsMobile>
    </Container>
  )
}

export default NavBar
