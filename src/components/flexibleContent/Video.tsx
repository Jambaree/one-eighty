import React from "react"
import { Box, Heading, Text } from "theme-ui"
import Embed from "react-embed"

// import app components
import Edges from "../Edges"

const Video = (props) => {
  const { headline, text, video } = props

  return (
    <Edges size="md">
        <Box sx={{ textAlign:"center" }}>
            {headline && <Heading sx={{ mb: [12, 24, 24] }}>{ headline }</Heading>}
            {text && <Text sx={{ display:"block", m: ["0 12px 20px", "0 36px 36px", "0 60px 48px"] }}>{ text }</Text>}
            {video && typeof window !== 'undefined' && <Embed url={ video } />}
        </Box>
    </Edges>
  )
}

export default Video