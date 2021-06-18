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
    variant,
    backgroundimage,
    backgroundcolor,
    headline,
    headlinestyle = "h2",
    text,
    link,
  } = props

  const showGraphics = variant === "graphics"

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: backgroundcolor,
        background:
          backgroundimage &&
          `url(${backgroundimage.sourceUrl}) no-repeat center`,
        backgroundSize: "cover",
      }}
    >
      {showGraphics && <CoralGraphic />}

      <Edges size="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            px: [0, 0, 45],
            pt: [120, 120, 157],
            pb: showGraphics ? 50 : [120, 120, 157],
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
                mb: [0, 50, 50],
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

          {showGraphics && <BoxesGraphic />}
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

const BoxesGraphic = () => (
  <Box
    sx={{
      position: "relative",
      py: 50,
      width: 175,
      height: 107,
    }}
  >
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        bg: "charcoalLight",
        width: 56,
        height: 56,
        borderRadius: "8px",
      }}
    />

    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: "calc(56px + 12px)",
        bg: "turquoise",
        width: 39,
        height: 39,
        borderRadius: "8px",
      }}
    />

    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: "calc(56px + 12px)",
        bg: "flax",
        width: 56,
        height: 56,
        borderRadius: "8px",
      }}
    />

    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        right: 0,
        bg: "plumLight",
        width: 39,
        height: 39,
        borderRadius: "8px",
      }}
    />
  </Box>
)
