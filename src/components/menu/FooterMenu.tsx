import React from "react"
import Parser from "html-react-parser"
import { Flex, Box } from "theme-ui"

// import app components
import Link from "../Link"
import useMenuItems from "./useMenuItems"
import { formatLink } from "../../utils"

const FooterMenu = (props) => {
  const items = useMenuItems("footer-menu")

  return (
    <Flex as="nav" {...props}>
      {items &&
        items.map(({ id, url, label }) => (
          <Box p={3}>
            <Link to={formatLink(url)}>{Parser(label)}</Link>
          </Box>
        ))}
    </Flex>
  )
}

export default FooterMenu
