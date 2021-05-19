import React from "react"
import { Box, Heading } from "theme-ui"

// import app components
import Textarea from "../Textarea"
import BackgroundImage from "../BackgroundImage"
import Edges from "../Edges"
import Button from "../Button"

const TextImage = (props) => {
  const { image, alignment, headline, text, link } = props

  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexWrap: "wrap-reverse",
          alignItems: "center",
          minHeight: [null, null, 400],
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
            height: [200, 300, "auto"],
            width: ["100%", null, "calc(50% - 25px)"],
            order: 1,
            top: [null, null, 0],
            bottom: [null, null, 0],
          }}
        >
          {image && (
            <BackgroundImage image={image} sx={{}} backgroundSize="contain" />
          )}
        </Box>
        <Edges size="md">
          <Box
            sx={{
              ml: alignment === "left" ? "auto" : "unset",
              mr: alignment === "right" ? "auto" : "unset",
              width: ["100%", null, "calc(50% - 25px)"],
              height: "100%",
              my: "auto",
              py: 40,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {headline && <Heading children={headline} variant="styles.h2" />}
            {text && <Textarea content={text} />}
            {link && (
              <Button variant="primary" to={link.url}>
                {link.title}
              </Button>
            )}
          </Box>
        </Edges>
      </Box>
    </>
  )
}

export default TextImage
