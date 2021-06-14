/** @jsx jsx */
import { jsx } from "theme-ui"
import { Heading, Text, Box } from "theme-ui"
import { GatsbyImage } from "jam-cms"
import { Link } from "gatsby"
import Parser from "html-react-parser"

// import app components
import Edges from "../Edges"
import Button from "../Button"

const Hero = (props) => {
  const { headline, link, image, mobileimage, text, linktype } = props

  return (
    <Box
      sx={{
        position: "relative",
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
            <Heading
              variant="styles.h1"
              sx={{ mb: "4" }}
              children={Parser(headline)}
            />
          )}
          {text && (
            <Text
              variant="introduction"
              children={Parser(text)}
              sx={{ mb: "4" }}
            />
          )}
          {link && linktype === "button" ? (
            <Button to={link.url} children={Parser(link.title)} />
          ) : (
            <Link to={link.url}>
              <Box variant="links.hyperlink">{Parser(link.title)}</Box>
            </Link>
          )}
        </Box>
      </Edges>
    </Box>
  )
}

export default Hero
