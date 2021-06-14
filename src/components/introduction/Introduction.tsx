import React from "react"
import { Heading, Box, Divider } from "theme-ui"
import Parser from "html-react-parser"

// import app components
import Edges from "../Edges"
import Textarea from "../Textarea"
import Hexagon from "../Hexagon"

const Introduction = (props) => {
  const { backgroundcolor, headline, text } = props

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        aspectRatio: "33%/66%",
        backgroundColor: backgroundcolor,
        backgroundSize: "cover",
        height: [448, 380, 380],
        display: "flex",
        alignItems: "center",
      }}
    >
      <Hexagon
        style={{
          position: "absolute",
          left: -50,
          top: -70,
          transform: "rotate(30deg)",
        }}
      />

      <Edges size="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", "row"],
            alignItems: ["flex-start", "center", "center"],
            height: ["unset", 100, 100],
          }}
        >
          {headline && (
            <Heading
              sx={{
                width: ["unset", 300, 450],
                pr: ["unset", 20, 60],
                mb: [36, 0, 0],
                variant: "styles.h2",
                borderRight: [
                  "unset",
                  `4px solid #22303D`,
                  `4px solid #22303D`,
                ],
                height: ["unset", 150, 150],
                display: "flex",
                alignItems: ["left", "center", "center"],
              }}
            >
              {Parser(headline)}
            </Heading>
          )}
          <Divider
            sx={{
              display: ["block", "none", "none"],
              width: 140,
              borderBottom: "4px solid",
              color: "charcoalDark",
              mb: 36,
            }}
          />
          <Box
            variant="text.introduction"
            sx={{
              width: ["100%", 400, "unset"],
              pl: [0, 20, 60],
            }}
          >
            {text && <Textarea content={Parser(text)} />}
          </Box>
        </Box>
      </Edges>
    </Box>
  )
}

export default Introduction
