import React from "react"
import { GatsbyImage } from "jam-cms"
import { Box, Heading, Container } from "theme-ui"
import Parser from "html-react-parser"

// import app components
import Edges from "../Edges"
import Textarea from "../Textarea"

const Content = (props) => {
  const { text, heading, image, backgroundcolor } = props

  return (
    <Container
      sx={{
        bg: backgroundcolor,
        py: [4, 5, 6],
      }}
    >
      <Edges size="lg">
        {heading && (
          <Heading
            variant="styles.root.h1"
            sx={{
              color: `${backgroundcolor === "blue180" ? "white" : "blue180"}`,
            }}
            children={Parser(heading || "")}
          />
        )}
        <Box
          sx={{
            "div > *": {
              color: `${backgroundcolor === "blue180" ? "white" : "black"}`,
            },
            width: ["100%", "75%", "53%"],
            py: 50,
          }}
        >
          {text && <Textarea content={text} />}
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            mt: "20px",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.2)",
            p: "12px",
          }}
        >
          {image && <GatsbyImage image={image} />}
        </Box>
      </Edges>
    </Container>
  )
}

export default Content
