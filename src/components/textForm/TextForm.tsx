import React from "react"
import { Box, Heading, Text } from "theme-ui"

// import app components
import Form from "../../components/Form"

const TextForm = (props) => {
  const { formbackground, alignment, headline, text, disclaimer } = props

  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: ["column", "column", "row"],
          flexWrap: "wrap-reverse",
          alignItems: "center",
          height: "auto",
          textAlign: "left",
          my: "100px",
        }}
      >
        <Box
          sx={{
            ml: alignment === "left" ? "auto" : "unset",
            mr: alignment === "right" ? "auto" : "unset",
            order: alignment === "left" ? 1 : 2,
            width: ["100%", null, "calc(50% - 140px)"],
            height: "100%",
            my: [93, 93, "auto"],
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              height: 168,
              width: 168,
              bg: "plumLight",
              borderRadius: "50%",
              display: "block",
              overflow: "hidden",
              top: alignment === "right" ? ["62%", "64%", 0] : 0,
              position: "absolute",
              left: alignment === "left" ? "-3%" : "unset",
              right: alignment === "right" ? "-3%" : "unset",
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              pl: [24, 24, alignment === "left" ? "5%" : "24px"],
              pr: [24, 24, alignment === "right" ? "5%" : "24px"],
              pt: [42, 42, "unset"],
              margin: "0 auto",
            }}
          >
            {headline && (
              <Heading
                children={headline}
                variant="styles.h2"
                sx={{ pt: 65, pb: 36, zIndex: 1, maxWidth: "540px" }}
              />
            )}
            {text && (
              <Text
                children={text}
                sx={{
                  paddingBottom: 70,
                  maxWidth: "540px",
                }}
                variant="text.introduction"
              />
            )}
            {disclaimer && (
              <Text
                children={disclaimer}
                variant="text.paragraph"
                sx={{
                  fontSize: "10px",
                  letterSpacing: "-0.1px",
                  color: "black50",
                  maxWidth: "540px",
                }}
              />
            )}
          </Box>
        </Box>
        <Box
          sx={{
            order: alignment === "left" ? 2 : 1,
            height: "auto",
            width: ["100%", "100%", "50%"],
            top: [null, null, 0],
            bottom: [null, null, 0],
            bg: formbackground,
          }}
        >
          <Form {...props} />
        </Box>
      </Box>
    </>
  )
}

export default TextForm
