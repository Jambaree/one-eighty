"use client"
import React from "react"
import { Box, Flex, Container } from "theme-ui"
import Parser from "html-react-parser"

import Edges from "../Edges"
import Link from "next/link"
import theme from "../../theme"
import { usePathname } from "next/navigation"

const DesktopMenu = (props) => {
  const { items } = props

  return (
    <Container
      sx={{
        position: "absolute",
        width: "100%",
        height: theme.headerHeight,
        left: 0,
        top: 0,
        background: "white",
      }}
    >
      <Edges size="lg">
        <Flex
          sx={{
            position: "relative",
            justifyContent: "space-between",
          }}
        >
          <Box
            pr={2}
            style={{
              width: "136px",
              flexShrink: 0,
              marginRight: 26,
            }}
            // logo placeholder
          ></Box>
          <Flex
            sx={{
              alignItems: "center",
              "@media (max-width: 1023px)": {
                display: "none",
              },
            }}
          >
            {items &&
              items.map((item, index: number) => {
                return <MenuButton key={index} item={item} />
              })}
          </Flex>
        </Flex>
      </Edges>
    </Container>
  )
}

export default DesktopMenu

const MenuButton = (props) => {
  const {
    item: { label, children, path },
  } = props
  const pathname = usePathname()
  return (
    <Box
      sx={{
        height: theme.headerHeight,
        display: "flex",
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        m: "unset",
        mr: 26,
        p: "unset",
      }}
    >
      <Box variant="text.primaryNav">
        <Link
          href={path}
          className={
            path.includes(pathname) && pathname !== "/"
              ? "text-[#DF092D]"
              : "text-[#000000D9] hover:text-[#DF092D]"
          }
        >
          <Box py="8px">{Parser(label || "")}</Box>
        </Link>
      </Box>
    </Box>
  )
}
