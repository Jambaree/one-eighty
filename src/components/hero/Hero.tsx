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
        m: "24px 0",
        p: [12, 0, 0],
      }}
    >
      <Edges size="lg">
        <Box sx={{ left: 0, zIndex: 2, height: [600, 400, 600] }}>
          {image && (
            <GatsbyImage
              image={image}
              alt={image.altText}
              sx={{
                top: 100,
                height: [435, "unset", "unset"],
                display: ["none", "block", "block"],
              }}
            />
          )}
          {mobileimage && (
            <GatsbyImage
              image={mobileimage}
              alt={mobileimage.altText}
              sx={{
                top: 100,
                height: 435,
                display: ["block", "none", "none"],
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
            m: "24px auto",
            mb: [36, 0, 24],
            height: [360, 480, 550],
          }}
        >
          {headline && (
            <Heading
              variant="styles.h1"
              sx={{ fontWeight: "heading", mb: "4" }}
              children={headline}
            />
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
