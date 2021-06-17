import React from "react"
import { Box, Heading, Text } from "theme-ui"
import { Link } from "gatsby"
import Parser from "html-react-parser"

// import app components
import theme from "../../theme"
import Edges from "../Edges"

import CutSquareCoralGraphic from "../../icons/Cut_Square_Coral.svg"

const Banner = (props) => {
  const {
    backgroundimage,
    backgroundColor,
    headline,
    headlinestyle = "h2",
    text,
    link,
  } = props

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: backgroundColor,
        background:
          backgroundimage && `url(${backgroundimage.url}) no-repeat center`,
        backgroundSize: "cover",
      }}
    >
      <CoralGraphic />

      <Edges size="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            px: [0, 0, 45],
            py: [120, 120, 157],
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

const CoralGraphic = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: "calc(50% - 70px)",
        width: 140,
        height: 70,

        "@media screen and (min-width: 640px)": {
          left: "calc(50% - 100px)",
          width: 200,
          height: 100,
        },
      }}
    >
      <CutSquareCoralGraphic />
    </Box>
  )
}
