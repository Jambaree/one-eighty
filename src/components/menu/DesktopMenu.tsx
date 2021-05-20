import React, { useState } from "react"
import { Box, Flex, Text } from "theme-ui"

import { Close } from "mdi-material-ui"

import Link from "../Link"

import ChevronDown from "../../icons/chevron-down.svg"

interface Props {
  items?: [any]
}

const DesktopMenu: React.FC<Props> = (props: Props) => {
  const { items } = props

  const [headerMenu, setHeaderMenu] = useState(null)

  if (!items) {
    return null
  }

  return (
    <Flex
      sx={{
        alignItems: "center",
        "@media (max-width: 959px)": {
          display: "none",
        },
      }}
    >
      {items.map(({ title, children }, i) => {
        return (
          <Box
            ml="48px"
            key={i}
            sx={{
              position: "relative",
              height: 94,
              display: "flex",
              alignItems: "center",
              listStyleType: "none",
              "&:before": {
                content: "''",
                display: headerMenu === i ? "block" : "none",
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                height: 10,
                width: 40,
                zIndex: 1,
                backgroundColor: "coral",
              },
            }}
          >
            <span
              onClick={() => setHeaderMenu(headerMenu === i ? null : i)}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {title}
              <ChevronDown />
            </span>
            <Box
              sx={{
                position: "absolute",
                display: headerMenu === i ? "flex" : "none",
                flexDirection: "column",
                backgroundColor: "charcoalDark",
                top: 94,
                pb: 40,
                minWidth: 400,
                width: "auto",
                right: 0,

                a: {
                  fontFamily: "heading",
                },
                "a:hover": {
                  color: "coral",
                },
              }}
            >
              <li
                style={{
                  margin: "6px 6px 6px auto",
                  color: "coral",
                }}
              >
                <Close
                  onClick={() => setHeaderMenu(headerMenu === i ? null : i)}
                />
              </li>

              {children &&
                children.map((child, j) => (
                  <Link
                    key={j}
                    to={child.url}
                    aria-label={child.title}
                    title={child.title}
                  >
                    <Text
                      variant="clickListMenu"
                      sx={{
                        p: "16px 80px",
                        fontSize: 7,
                        fontWeight: "light",
                        letterSpacing: "-0.9px",
                        color: "almond",
                      }}
                    >
                      {child.title}
                    </Text>
                  </Link>
                ))}
            </Box>
          </Box>
        )
      })}
    </Flex>
  )
}

export default DesktopMenu
