import React from "react"
import { Link } from "gatsby"
import { Box, Heading, Text } from "theme-ui"

// import app components

const FourOhFor = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        p: "5vw",
      }}
    >
      <Heading variant="styles.h1" sx={{ mb: 24 }}>
        404
      </Heading>
      <Text as="p" variant="text.introduction" sx={{ mb: 24 }}>
        We're sorry, we can't find the page you're looking for.
      </Text>
      <Link to="/">
        <Box
          variant="buttons.primary"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Return Home
        </Box>
      </Link>
    </Box>
  )
}

export default FourOhFor
