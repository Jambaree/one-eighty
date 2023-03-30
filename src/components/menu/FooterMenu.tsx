"use client"
import React from "react"
import Parser from "html-react-parser"
import { Flex, Box } from "theme-ui"
import { getMenuItems } from "@jambaree/next-wordpress"

// import app components
import Link from "next/link"

export default function FooterMenu(props) {
  // const items = await getMenuItems({ id: "footer-menu" })

  return (
    <Flex as="nav" {...props}>
      {/* {items &&
        items?.map(({ id, url, label }) => (
          <Box p={3}>
            <Link href={formatLink(url)}>{Parser(label)}</Link>
          </Box>
        ))} */}
    </Flex>
  )
}
