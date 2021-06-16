import React from "react"
import { Box, Heading, Text } from "theme-ui"
import Parser from "html-react-parser"

// import app components
import BackgroundImage from "../BackgroundImage"
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

  return (
    <>
      <Box
        sx={{
          backgroundColor: backgroundcolor,
          position: "relative",
          display: "flex",
          flexWrap: "wrap-reverse",
          alignItems: "center",
          minHeight: [null, null, 600],
          my: [48, 48, 0],
          textAlign: "left",
          "p:last-child": {
            mb: [16, 18, 24],
          },
        }}
      >
        <Box
          sx={{
            left: alignment === "left" ? 0 : "unset",
            right: alignment === "right" ? 0 : "unset",
            position: ["relative", null, "absolute"],
            height: [434, 500, "auto"],
            width: ["100%", "100%", "calc(50% - 25px)"],
            order: 1,
            top: [null, null, 0],
            bottom: [null, null, 0],
            m: [24, 24, "52px 24px"],
          }}
        >
          {image && <BackgroundImage image={image} backgroundSize="contain" />}
        </Box>
        <Edges size="md">
          <Box
            sx={{
              ml: alignment === "left" ? "auto" : "unset",
              mr: alignment === "right" ? "auto" : "unset",
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
              <Button variant="primary" to={link.url}>
                {Parser(link.title)}
              </Button>
            )}
          </Box>
        </Edges>
      </Box>
    </>
  )
}

export default TextImage
