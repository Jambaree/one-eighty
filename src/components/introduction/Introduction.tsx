import React from "react"
import { Heading, Box, Divider } from "theme-ui"

// import app components
import Edges from "../Edges"
import Textarea from "../Textarea"

const Introduction = (props) => {
  const { backgroundcolor, background, headline, text } = props

  return (
    <Box
      sx={{
        aspectRatio: "33%/66%",
        backgroundImage: [
          "unset",
          `url(${background?.url})`,
          `url(${background?.url})`,
        ],
        backgroundColor: [backgroundcolor, "unset", "unset"],
        backgroundSize: "cover",
        height: [448, 380, 380],
        display: "flex",
        alignItems: "center",
      }}
    >
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
              {headline}
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
            {text && <Textarea content={text} />}
          </Box>
        </Box>
      </Edges>
    </Box>
  )
}

export default Introduction
