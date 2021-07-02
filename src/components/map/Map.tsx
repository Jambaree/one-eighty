import React from "react"
import { GatsbyImage } from "jam-cms"
import { Box, Heading, Container } from "theme-ui"
import Parser from "html-react-parser"

// import app components
import Edges from "../Edges"
import Textarea from "../Textarea"
import BackgroundImage from "../BackgroundImage"

const Map = (props) => {
  const { text, heading, image, backgroundcolor } = props

  return (
    <Container
      sx={{
        bg: backgroundcolor,
        pt: ["150px", "200px", "273px"],
        pb: ["70px", "90px", "117px"],
      }}
    >
      <Edges size="cmd">
        <Heading
          variant="styles.h1"
          sx={{
            color: `${backgroundcolor === "blue180" ? "white" : "blue180"}`,
          }}
          children={Parser(heading || "")}
        />
        <Box
          sx={{
            "div > *": {
              color: `${backgroundcolor === "blue180" ? "white" : "black"}`,
            },
          }}
          py={[4, 5, 6]}
          pr={[0, "100px", "300px"]}
        >
          <Textarea content={text} />
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
          }}
        >
          {image && <GatsbyImage image={image} />}
        </Box>
      </Edges>
    </Container>
  )
}

export default Map
