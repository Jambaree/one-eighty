/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import { Heading, Text, Box, Themed } from "theme-ui"
import { GatsbyImage } from "jam-cms"

// import app components
import Edges from "../Edges"
import Button from "../Button"

const Hero = (props) => {
  const { headline, link, image, mobileimage, text } = props

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "calc(100vh - 94px)",
        height: "auto",
        mt: [60, 24, 24],
        mb: [98, 0, 160],
      }}
    >
      <Edges size="lg">
        <Box sx={{ left: 0, zIndex: 2 }}>
          {image && (
            <GatsbyImage
              image={image}
              alt={image.altText}
              sx={{
                display: ["none", "block", "block"],
                objectFit: "contain",
              }}
            />
          )}
          {mobileimage && (
            <GatsbyImage
              image={mobileimage}
              alt={mobileimage.altText}
              sx={{
                display: ["block", "none", "none"],
                objectFit: "contain",
              }}
            />
          )}
        </Box>
        <Box
          sx={{
            zIndex: 4,
            maxWidth: 600,
            textAlign: ["left", "center", "center"],
            display: "flex",
            alignItems: ["flex-start", "center", "center"],
            justifyContent: "center",
            flexDirection: "column",
            mt: 36,
            mx: "auto",
          }}
        >
          {headline && (
            <Heading variant="styles.h1" sx={{ mb: "4" }} children={headline} />
          )}
          {text && (
            <Text variant="introduction" children={text} sx={{ mb: "4" }} />
          )}
          {link && <Button to={link.url} children={link.title} />}
        </Box>
      </Edges>
    </Box>
  )
}

export default Hero
