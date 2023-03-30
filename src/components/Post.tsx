"use client"
import React from "react"
import { Box, Heading } from "theme-ui"

// import app components
import BackgroundImage from "./BackgroundImage"
import Link from "next/link"

const Post = (props) => {
  const { image, headline, url } = props

  return (
    <Box>
      <Link href={url}>
        <Box mb={3} style={{ position: "relative", height: 220 }}>
          {image && <BackgroundImage image={image} />}
        </Box>
      </Link>

      {headline && (
        <Link href={url} style={{ textDecoration: "none" }}>
          <Heading as="h3" mb={2} color="primary">
            {headline}
          </Heading>
        </Link>
      )}
    </Box>
  )
}

export default Post
