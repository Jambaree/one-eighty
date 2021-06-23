/** @jsx jsx */
import { jsx } from "theme-ui"
import { Heading, Text, Box } from "theme-ui"
import { GatsbyImage } from "jam-cms"
import { Link as GatsbyLink } from "gatsby"
import Parser from "html-react-parser"

// import app components
import Edges from "../Edges"
import Button from "../Button"

const Hero = (props) => {
  const {
    headline,
    headlinestyle = "h1",
    imagealignment = 'first',
    link,
    image,
    mobileimage,
    text,
    linktype,
  } = props

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
        <Box sx={{ left: 0, zIndex: 2, display: 'flex', justifyContent: 'center' }}>
          {image && (
            <GatsbyImage
              image={image}
              alt={image.altText}
              sx={{
                display: ["none", "block", "block"],
                objectFit: "contain",
                width: '90%'
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
                img: {
                  objectFit: "contain!important",
                },
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

          {link?.url &&
            (linktype === "button" ? (
              <Button to={link.url} children={Parser(link?.title || "")} />
            ) : (
              <>
                {link?.url.includes("http") ? (
                  <a href={link?.url} rel="noopener noreferrer" target="_blank">
                    <Box variant="links.hyperlink">
                      {Parser(link?.title || "")} →
                    </Box>
                  </a>
                ) : (
                  <GatsbyLink to={link?.url}>
                    <Box variant="links.hyperlink">
                      {Parser(link?.title || "")} →
                    </Box>
                  </GatsbyLink>
                )}
              </>
            ))}
        </Box>
      </Edges>
    </Box>
  )
}

export default Hero
