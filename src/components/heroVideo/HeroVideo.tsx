import React from "react"
import { Box, Heading, Text } from "theme-ui"
import Embed from "react-embed"

// import app components
import Edges from "../Edges"

const Video = (props) => {
  const { headline, subheading, videoalignment, videolink } = props

  return (
    <Box
      sx={{
        paddingBottom: videoalignment == "first" ? 150 : 160,
        paddingTop: 100,
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
                variant="styles.h1"
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
                {headline}
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
                {subheading}
              </Text>
            )}
          </Box>
          {videolink && typeof window !== "undefined" && (
            <Box
              sx={{
                order: videoalignment == "first" ? 1 : 2,
                maxWidth: 890,
                width: ["100%", "100%", "80%"],
                objectFit: "contain",
                borderRadius: "8px",
                iframe: {
                  height: ["auto", 385, 476],
                  borderRadius: "8px",
                },
              }}
            >
              <Embed url={videolink} />
            </Box>
          )}
        </Box>
      </Edges>
    </Box>
  )
}

export default Video
