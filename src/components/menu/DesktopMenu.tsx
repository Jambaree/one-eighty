import React, { useState } from "react"
import { IconButton, Box, Flex, Text, Button, Container } from "theme-ui"
import { motion, AnimatePresence } from "framer-motion"
import Parser from "html-react-parser"
import { Close } from "mdi-material-ui"

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

  const [activeMenuIndex, setActiveMenuIndex] = useState(null)

  const handleOpen = (itemIndex: number, hasSubMenu?: boolean) => {
    if (!hasSubMenu) {
      setActiveMenuIndex(null)
      return
    }

    if (itemIndex === activeMenuIndex) {
      setActiveMenuIndex(null)
    } else {
      setActiveMenuIndex(itemIndex)
    }
  }

  const handleClose = () => {
    setActiveMenuIndex(null)
  }

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
                return (
                  <MenuButton
                    key={item.key}
                    item={item}
                    active={index === activeMenuIndex}
                    onOpen={() =>
                      handleOpen(index, !!(item?.children?.length > 0))
                    }
                    onClose={handleClose}
                  />
                )
              })}
          </Flex>
        </Flex>
      </Edges>
    </Container>
  )
}

export default DesktopMenu

interface MenuButtonProps {
  active?: boolean
  item?: MenuItem
  onOpen?: () => void // this is how to define a function type
  onClose?: () => void
}

const MenuButton = (props: MenuButtonProps) => {
  const {
    item: { title, children, url },
    onClose,
    onOpen,
    active,
  } = props

  const linkProps =
    children?.length === 0
      ? {
          as: Link, // make Button function as a Link if no children
          to: url,
          activeStyle: {
            "&:before": {
              opacity: 1,
            },
          },
        }
      : {}

  return (
    <>
      <Button
        {...linkProps}
        ml="48px"
        variant="text.primaryNav"
        onClick={onOpen}
        sx={{
          color: theme.colors.black,
          height: theme.headerHeight,
          cursor: "pointer",
          display: "flex",
          position: "relative",
          flexDirection: "row",
          alignItems: "center",
          m: "unset",
          mr: 26,
          p: "unset",

          "&:hover": {
            "&:before": {
              opacity: 1,
            },
          },
          "&:before": {
            pointerEvents: "none",
            content: "''",
            opacity: active ? 1 : 0,
            transition: "opacity 150ms ease-in-out",
            position: "absolute",
            bottom: 0,
            left: "45%",
            transform: "translateX(-50%)",
            height: 9,
            width: 40,
            zIndex: 1,
            // backgroundColor: "coral",
          },
        }}
      >
        {Parser(title || "")}

        {/* {children?.length > 0 && <ChevronDown />} */}
      </Button>

      <AnimatePresence>
        {active && children?.length > 0 && (
          <SubMenu items={children} onClose={onClose} />
        )}
      </AnimatePresence>
    </>
  )
}

const SubMenu = (props: { items?: MenuItem[]; onClose?: () => void }) => {
  // the types can also be defined ^here^ instead of creating an interface
  const { items, onClose } = props

  return (
    <>
      <Box // click away listener
        onClick={onClose}
        sx={{
          zIndex: -1,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100vh",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, y: "-100%", transition: { duration: 0.3 } }}
        style={{
          zIndex: -1,
          display: "flex",
          padding: "85px 85px 55px",
          background: theme.colors.blue180,
          position: "absolute",
          flexDirection: "column",
          right: 0,
          top: theme.headerHeight,
          maxHeight: `calc(100vh - ${theme.headerHeight})`,
          width: "50%",
          overflow: "auto",
        }}
      >
        <IconButton
          onClick={onClose}
          color="white"
          sx={{
            cursor: "pointer",
            position: "absolute",
            top: 40,
            right: 40,
            "> svg": {
              width: "35px",
              height: "35px",
            },
          }}
        >
          <Close />
        </IconButton>

        {items &&
          items.map((item: MenuItem, index: number) => (
            <Link
              key={index}
              to={item.url}
              onClick={onClose}
              aria-label={item.title}
              title={item.title}
              style={{
                display: "inline-block",
                marginBottom: "40px",
                color: theme.colors.black25,
                "&:hover": {
                  // color: theme.colors.coral,
                },
              }}
              // activeStyle={{ color: theme.colors.coral }}
            >
              <Text variant="desktopSubMenuItem" color="inherit">
                {Parser(item.title || "")}
              </Text>
            </Link>
          ))}
      </motion.div>
    </>
  )
}
