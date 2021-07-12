import React from "react"
import { Box, Flex, Container } from "theme-ui"
import Parser from "html-react-parser"

import Edges from "../Edges"
import Link from "../Link"
import theme from "../../theme"

interface MenuItem {
  key: number
  title?: string // the "?" makes this optional
  postID?: number
  postTypeID?: string
  url?: string
  children?: MenuItem[] // array of MenuItem, can also be written as Array<MenuItem>
}

interface Props {
  items?: MenuItem[] // or Array<MenuItem>
}

const DesktopMenu = (props: Props) => {
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
              items.map((item: MenuItem, index: number) => {
                return <MenuButton key={index} item={item} />
              })}
          </Flex>
        </Flex>
      </Edges>
    </Container>
  )
}

export default DesktopMenu

interface MenuButtonProps {
  item?: MenuItem
}

const MenuButton = (props: MenuButtonProps) => {
  const {
    item: { title, children, url },
  } = props

  const linkProps =
    children?.length === 0
      ? {
          to: url,
          activeStyle: {
            color: theme.colors.red,
          },
          activeClassName: "current",
        }
      : {}

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
        <Link {...linkProps}>{Parser(title || "")}</Link>
      </Box>
    </Box>
  )
}
