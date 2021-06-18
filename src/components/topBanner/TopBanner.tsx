import React from "react"
import { Box, Text, Heading } from "theme-ui"
import Parser from "html-react-parser"

// import app components
import Hexagon from "../Hexagon"
import theme from "../../theme"

const TopBanner = (props) => {
  const { headline, text, color = "plum" } = props

  const colors = {
    plum: ["plum", "plumDark", "almondLight"],
    flax: ["flax", "flaxLight", "charcoal"],
    turquoise: ["turquoise", "turquoiseLight", "charcoal"],
  }

  const color1 = colors[color][0]
  const color2 = colors[color][1]
  const color3 = colors[color][2]

  return (
    <Box>
      <Hexagon
        background={theme.colors[color1]}
        style={{
          transform: "rotate(30deg)",
          position: "absolute",
          left: "-50px",
          top: "18px",
        }}
      />
      <Box
        sx={{
          background: (theme) => theme.colors[color2],
          height: 353,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: ["flex-start", "center", "center"],
          mt: "-24px",
        }}
      >
        {headline && (
          <Heading
            variant="styles.h1"
            sx={{
              fontSize: "65px",
              color: color3,
              mb: 36,
              pl: ["18px", "18px", "unset"],
            }}
          >
            {Parser(headline)}
          </Heading>
        )}
        {text && (
          <Text
            variant="text.introduction"
            sx={{
              color: color3,
              fontSize: "18px",
              px: ["18px", "24px", "12px"],
            }}
          >
            {Parser(text)}
          </Text>
        )}
      </Box>
    </Box>
  )
}

export default TopBanner
