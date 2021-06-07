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
        paddingBottom: 160,
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
            textAlign: "center",
          }}
        >
          <Box sx={{ order: videoalignment == "first" ? 2 : 1 }}>
            {headline && (
              <Heading
                variant="styles.h1"
                sx={{
                  my: [12, 24, 24],
                  fontSize: 12,
                  pb: 25,
                  lineHeight: "65px",
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
                  mb: 96,
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
                width: "80%",
                objectFit: "contain",
                borderRadius: "8px",
                iframe: {
                  height: 476,
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
