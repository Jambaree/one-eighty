/** @jsx jsx */
import { jsx } from "theme-ui"
import { Heading, Text, Box, Link as ThemeLink } from "theme-ui"
import { GatsbyImage } from "jam-cms"
import { Link as GatsbyLink, navigate } from "gatsby"
import Parser from "html-react-parser"

// import app components
import Edges from "../Edges"
import Button from "../Button"

const Hero = (props) => {
  const {
    headline,
    headlinestyle = "h1",
    link,
    image,
    mobileimage,
    text,
    linktype,
  } = props

  const isUrlExternal = (link) => {
    if (!link || link === null || link === undefined) {
      return undefined
    } else if (link.includes("http")) {
      return true
    } else {
      return false
    }
  }

  return (
    <Box
      sx={{
        position: "relative",
        height: "auto",
        mt: [60, 24, 24],
        mb: [100, 100, 160],
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
                display: ["inline-block", "none", "none"],
                objectFit: "contain",
              }}
            />
          )}
        </Box>
        <Box
          sx={{
            zIndex: 4,
            maxWidth: 680,
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
              variant={`styles.${headlinestyle}`}
              as={headlinestyle}
              sx={{ mb: "4" }}
              children={Parser(headline)}
            />
          )}
          {text && (
            <Text
              variant="introduction"
              children={Parser(text)}
              sx={{ mb: "4", lineHeight: 1.8 }}
            />
          )}
          {link?.url ? (
            isUrlExternal ? (
              linktype === "button" ? (
                <Button
                  href={link?.url}
                  children={Parser(link?.title || "")}
                  onClick={() => navigate(link.url)}
                />
              ) : (
                <ThemeLink href={link?.url}>
                  <Box variant="links.hyperlink">
                    {Parser(link?.title || "")} →
                  </Box>
                </ThemeLink>
              )
            ) : linktype === "button" ? (
              <Button href={link?.url} children={Parser(link?.title || "")} />
            ) : (
              <GatsbyLink to={link?.url}>
                <Box variant="links.hyperlink">
                  {Parser(link?.title || "")} →
                </Box>
              </GatsbyLink>
            )
          ) : null}
        </Box>
      </Edges>
    </Box>
  )
}

export default Hero
