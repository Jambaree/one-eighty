import React from "react"
import { Box, Heading, Text } from "theme-ui"
import Embed from "react-embed"
import Parser from "html-react-parser"

// import app components
import Edges from "../Edges"

const Video = (props) => {
  const {
    headline,
    headlinestyle = "h2",
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
                      ? ["12px 0", "24px 0", "62px 0 22px 0"]
                      : ["12px 0", "24px 0", "24px 0"],
                  fontSize: videoalignment === "first" ? "46px" : 12,
                  pr: [100, 0, 0],
                  pb: 25,
                  lineHeight:
                    videoalignment === "first"
                      ? ["36px", "54px", "54px"]
                      : ["36px", "65px", "65px"],
                  letterSpacing:
                    videoalignment === "first" ? "-1.15px" : "-1.63px",
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
                  fontSize: "18px",
                  lineHeight: "30px",
                  mb: videoalignment === "first" ? 0 : 90,
                  pr: [35, 0, 0],
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
                  overflow: "hidden",
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
              </Box>
            )}
          </Box>
        </Box>
      </Edges>
    </Box>
  )
}

export default Video
