import React from "react"
import { Box, Heading, Text } from "theme-ui"
import Parser from "html-react-parser"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import app components
// import BackgroundImage from "../BackgroundImage"
import Edges from "../Edges"
import Button from "../Button"

const TextImage = (props) => {
  const {
    backgroundcolor,
    image,
    alignment,
    headline,
    headlinestyle = "h2",
    text,
    link,
  } = props

  const imageData = getImage(image.localFile)

  return (
    <>
      <Edges size="lg">
        <Box
          sx={{
            backgroundColor: backgroundcolor,
            position: "relative",
            display: "flex",
            flexDirection: alignment === "left" ? "row" : "row-reverse",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            my: 50,
          }}
        >
          <Box
            sx={{
              width: ["100%", "100%", "calc(50% - 25px)"],
            }}
          >
            {image && imageData && <GatsbyImage image={imageData} alt="" />}
          </Box>

          <Box
            sx={{
              width: ["100%", null, "calc(50% - 25px)"],
              height: "100%",
              my: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              pt: 36,
            }}
          >
            {headline && (
              <Heading
                children={Parser(headline)}
                variant={`styles.${headlinestyle}`}
                as={headlinestyle}
                sx={{ pb: 36 }}
              />
            )}

            {text && (
              <Text
                children={Parser(text)}
                variant="text.paragraph"
                sx={{
                  paddingBottom: 36,
                }}
              />
            )}

            {link?.url && (
              <Button variant="primary" to={link.url} mb={50}>
                {link.title && Parser(link.title)}
              </Button>
            )}
          </Box>
        </Box>
      </Edges>
    </>
  )
}

export default TextImage
