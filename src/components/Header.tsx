"use client"
import React, { useEffect, useState } from "react"

import { Container, Box, Flex } from "theme-ui"
import Link from "next/link"

// import app components
import theme from "../theme"
import Edges from "./Edges"
import DesktopMenu from "./menu/DesktopMenu"
import MobileMenu from "./menu/MobileMenu"
import HamburgerMenu from "@/icons/hamburger.svg"
import CloseIcon from "@/icons/close.svg"
import Logo from "@/icons/logo.svg"

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window?.document && isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible")
  }, [isOpen])
  const { items } = props

  return (
    <div className="relative">
      <Container
        sx={{
          background: "#fff",
          height: theme.headerHeight,
          position: "fixed",
          left: 0,
          top: 0,
          width: ["100%", "100%", "100%"],
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #D3D3D3",
        }}
      >
        <Edges size="lg">
          <Flex
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              pr={2}
              sx={{
                position: "relative",
                zIndex: 2,
                textDecoration: "none",
                ".a": { fill: "black" },
              }}
            >
              <Link href="/">
                <Logo
                  style={{
                    height: "auto",
                    width: "136px",
                    marginBottom: "-4px",
                  }}
                />
              </Link>
            </Box>

            <DesktopMenu items={items} />

            <Box
              sx={{
                transform: "translateX(15px)",
                cursor: "pointer",
                "@media (min-width: 1024px)": { display: "none" },
              }}
              p={15}
            >
              {!isOpen ? (
                <HamburgerMenu
                  className="w-[30px] h-[30px]"
                  onClick={() => {
                    setIsOpen(!isOpen)
                  }}
                />
              ) : (
                <CloseIcon
                  className="w-[30px] h-[30px] mt-[15px] "
                  onClick={() => {
                    setIsOpen(!isOpen)
                  }}
                />
              )}
            </Box>
          </Flex>
        </Edges>
      </Container>
      <Box
        className=" flex"
        sx={{ "@media (min-width: 1024px)": { display: "none" } }}
      >
        <MobileMenu isOpen={isOpen} menu={items} />
      </Box>
    </div>
  )
}

export default Header
