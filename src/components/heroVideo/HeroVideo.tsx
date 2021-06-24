import React from "react"
import { Box, Heading, Text } from "theme-ui"
import Embed from "react-embed"
import Parser from "html-react-parser"

// import app components
import Edges from "../Edges"

const Video = (props) => {
  const {
    headline,
    headlinestyle = "h1",
    subheading,
    videoalignment,
    videolink,
  } = props

  return (
    <Box
      sx={{
        paddingBottom: videoalignment == "first" ? 150 : 160,
        paddingTop: [50, 100],
        bg: "almondLight",
      }}
    >
      <Edges size="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: ["unset", "center", "center"],
          }}
        >
          <Box
            sx={{
              order: videoalignment == "first" ? 2 : 1,
              px: [0, 45, 135],
            }}
          >
            {headline && (
              <Heading
                variant={`styles.${headlinestyle}`}
                as={headlinestyle}
                sx={{
                  m:
                    videoalignment === "first"
                      ? ["80px 0 12px 0", "80px 0 24px 0", "62px 0 22px 0"]
                      : ["12px 0", "24px 0", "24px 0"],
                  pr: [24, 0, 0],
                  pb: 25,
                }}
              >
                {Parser(headline)}
              </Heading>
            )}
            {subheading && (
              <Text
                as="p"
                variant="text.introduction"
                sx={{
                  mb: videoalignment === "first" ? 0 : 90,
                  pr: [24, 0, 0],
                }}
              >
                {Parser(subheading)}
              </Text>
            )}
          </Box>
          <Box
            sx={{
              maxWidth: 890,
              width: "100%",
              order: videoalignment == "first" ? 1 : 2,
            }}
          >
            {videolink && typeof window !== "undefined" && (
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  height: 0,
                  maxWidth: "100%",
                  paddingBottom: "56.25%",
                  iframe: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                  },
                }}
              >
                <Embed url={videolink} />
                <TurquoiseBlock />
                <FlaxBlock />
                <PlumBlock />
              </Box>
            )}
          </Box>
        </Box>
      </Edges>
    </Box>
  )
}

export default Video

const TurquoiseBlock = () => {
  return (
    <Box
      sx={{
        display: "none",
        "@media screen and (min-width: 1200px)": {
          display: "block",
        },
        position: "absolute",
        top: "0",
        right: "calc(100% + 20px)",
        width: "110px",
        height: "110px",
        bg: "turquoise",
        borderRadius: "8px",
      }}
    />
  )
}

const FlaxBlock = () => {
  return (
    <Box
      sx={{
        width: "24px",
        height: "24px",
        borderRadius: "3px",
        "@media screen and (min-width: 1200px)": {
          width: "65px",
          height: "65px",
          borderRadius: "8px",
        },
        position: "absolute",
        bottom: "calc(100% + 20px)",
        left: 0,
        bg: "flax",
      }}
    />
  )
}

const PlumBlock = () => {
  return (
    <Box
      sx={{
        top: "calc(100% + 20px)",
        right: 0,
        width: "41px",
        height: "41px",
        borderRadius: "3px",
        "@media screen and (min-width: 1200px)": {
          width: "110px",
          height: "110px",
          borderRadius: "8px",
          bottom: 0,
          left: "calc(100% + 20px)",
          top: "unset",
          right: "unset",
        },
        position: "absolute",
        bg: "plum",
      }}
    />
  )
}
