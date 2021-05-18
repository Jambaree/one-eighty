import React from "react"
import { Heading, Box } from "theme-ui"

// import app components
import Edges from "../Edges"
import Textarea from "../Textarea"

const Introduction = (props) => {
  const { background, headline, text } = props

  return (
    <Box
      sx={{
        aspectRatio: "33%/66%",
        backgroundImage: `url(${background.url})`,
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
            alignItems: "center",
            height: 100,
          }}
        >
          {headline && (
            <Heading
              sx={{
                width: ["unset", 300, 450],
                pr: ["unset", 20, 80],
                variant: "styles.h2",
                borderRight: [
                  "unset",
                  `4px solid #22303D`,
                  `4px solid #22303D`,
                ],
                height: 150,
                display: "flex",
                alignItems: "center",
              }}
            >
              {headline}
            </Heading>
          )}
          <Box
            variant="text.introduction"
            sx={{ width: ["100%", 400, "unset"], pl: [0, 20, 80] }}
          >
            {text && <Textarea content={text} />}
          </Box>
        </Box>
      </Edges>
    </Box>
  )
}

export default Introduction
