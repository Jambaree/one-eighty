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

  const imageData = image?.localFile && getImage(image.localFile)

  return (
    <Box
      sx={{
        backgroundColor: backgroundcolor,
      }}
    >
      <Edges size="lg">
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: alignment === "left" ? "row" : "row-reverse",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            py: 50,
          }}
        >
          <Box
            sx={{
              width: ["100%", "100%", "calc(50% - 25px)"],
              maxHeight: [384, 603, 603],
            }}
          >
            {image && imageData && (
              <GatsbyImage
                image={imageData}
                alt={image?.altText || ""}
                style={{ maxWidth: "100%", objectFit: "contain" }}
              />
            )}
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
                variant="text.introduction"
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
    </Box>
  )
}

export default TextImage
