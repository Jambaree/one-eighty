import React, { useState } from "react"
import { IconButton, Box, Flex, Text, Button } from "theme-ui"

import { Close } from "mdi-material-ui"

import Link from "../Link"

import ChevronDown from "../../icons/chevron-down.svg"

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

  const handleOpen = (itemIndex: number) => {
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
    <Flex
      sx={{
        alignItems: "center",
        "@media (max-width: 1023px)": {
          display: "none",
        },
      }}
    >
      {items.map((item: MenuItem, index: number) => {
        return (
          <MenuItem
            key={item.key}
            item={item}
            active={index === activeMenuIndex}
            onOpen={() => handleOpen(index)}
            onClose={handleClose}
          />
        )
      })}
    </Flex>
  )
}

export default DesktopMenu

interface MenuItemProps {
  active?: boolean
  item?: MenuItem
  onOpen?: () => void // this is how to define a function type
  onClose?: () => void
}

const MenuItem = (props: MenuItemProps) => {
  const {
    item: { title, children },
    onClose,
    onOpen,
    active,
  } = props

  return (
    <>
      <Button
        ml="48px"
        variant="navButton"
        onClick={onOpen}
        sx={{
          height: "94px",
          cursor: "pointer",
          display: "flex",
          position: "relative",
          flexDirection: "row",
          alignItems: "center",
          "&:hover": {
            "&:before": {
              opacity: 1,
            },
          },
          "&:before": {
            content: "''",
            opacity: active ? 1 : 0,
            transition: "opacity 150ms ease-in-out",
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            height: 9,
            width: 40,
            zIndex: 1,
            backgroundColor: "coral",
          },
        }}
      >
        {title}
        <ChevronDown />
      </Button>

      {active && children?.length > 0 && (
        <SubMenu items={children} onClose={onClose} />
      )}
    </>
  )
}

const SubMenu = (props: { items?: MenuItem[]; onClose?: () => void }) => {
  // the types can also be defined ^here^ instead of creating an interface
  const { items, onClose } = props

  return (
    <Flex
      bg="charcoalDark"
      sx={{
        position: "absolute",
        flexDirection: "column",
        right: 0,
        top: 94,
        maxHeight: "calc(100vh - 94px)",
        width: "50%",
        overflow: "auto",
      }}
      p={85}
    >
      <IconButton
        onClick={onClose}
        color="coral"
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
                color: theme.colors.coral,
              },
            }}
            activeStyle={{ color: theme.colors.coral }}
          >
            <Text variant="desktopSubMenuItem" color="inherit">
              {item.title}
            </Text>
          </Link>
        ))}
    </Flex>
  )
}
