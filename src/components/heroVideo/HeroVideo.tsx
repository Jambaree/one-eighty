import React from "react"
import { Box, Heading, Text } from "theme-ui"
import Embed from "react-embed"

// import app components
import Edges from "../Edges"

const Video = (props) => {
  const { headline, subheading, videoalignment, videolink } = props

  return (
    <Edges size="md" style={{ paddingBottom: 160, paddingTop: 100 }}>
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
              sx={{
                display: "block",
                m: ["0 12px 20px", "0 36px 36px", "0 60px 48px"],
              }}
            >
              {subheading}
            </Text>
          )}
        </Box>
        {videolink && typeof window !== "undefined" && (
          <Box sx={{ order: videoalignment == "first" ? 1 : 2, maxWidth: 890 }}>
            <Embed url={videolink} />
          </Box>
        )}
      </Box>
    </Edges>
  )
}

export default Video
