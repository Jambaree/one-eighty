import React from "react"
import { Box, Heading, Text } from "theme-ui"
import { Link } from "gatsby"
import Parser from "html-react-parser"

// import app components
import theme from "../../theme"
import Edges from "../Edges"

const Banner = (props) => {
  const { backgroundimage, headline, headlinestyle = "h2", text, link } = props

  return (
    <Box
      sx={{
        background:
          backgroundimage && `url(${backgroundimage.url}) no-repeat center`,
        backgroundSize: "cover",
      }}
    >
      <Edges size="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            px: [0, 0, 45],
            py: [96, 120, 157],
          }}
        >
          {headline && (
            <Heading
              variant={`styles.${headlinestyle}`}
              as={headlinestyle}
              children={Parser(headline)}
              sx={{
                mb: 32,
                lineHeight: ["36px", "65px", "65px"],
              }}
            />
          )}

          {text && (
            <Text
              as="p"
              variant="introduction"
              children={Parser(text)}
              sx={{
                fontSize: "18px",
                lineHeight: ["25px", "30px", "30px"],
                mb: 50,
              }}
            />
          )}

          {link?.url && (
            <Box variant="links.hyperlink">
              <Link
                to={link.url}
                style={{
                  letterSpacing: "-0.23px",
                  lineHeight: "25px",
                  color: theme.colors.coral,
                }}
              >
                {Parser(link.title)} →
              </Link>
            </Box>
          )}
        </Box>
      </Edges>
    </Box>
  )
}

export default Banner
