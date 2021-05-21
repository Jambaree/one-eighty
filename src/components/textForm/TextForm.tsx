import React from "react"
import { Box, Heading, Text } from "theme-ui"

// import app components
import BackgroundImage from "../BackgroundImage"
import Edges from "../Edges"
import Button from "../Button"
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
          minHeight: [null, null, 600],
          mb: [36, 36, 0],
          textAlign: "left",
        }}
      >
        <Edges size="md">
          <Box
            sx={{
              ml: alignment === "left" ? "auto" : "unset",
              mr: alignment === "right" ? "auto" : "unset",
              width: ["100%", null, "calc(50% - 25px)"],
              height: "100%",
              my: [93, 93, "auto"],
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              pt: 36,
            }}
          >
            {headline && (
              <Heading
                children={headline}
                variant="styles.h2"
                sx={{ pb: 36 }}
              />
            )}
            {text && (
              <Text
                children={text}
                sx={{
                  paddingBottom: 36,
                }}
                variant="text.introduction"
              />
            )}
            {disclaimer && (
              <Text children={disclaimer} variant="text.paragraph" />
            )}
          </Box>
        </Edges>
        <Box
          sx={{
            left: alignment === "left" ? 0 : "unset",
            right: alignment === "right" ? 0 : "unset",
            position: ["relative", null, "absolute"],
            height: [434, 500, "auto"],
            width: ["100%", "100%", "calc(50% - 25px)"],
            top: [null, null, 0],
            bottom: [null, null, 0],
            bg: formbackground,
          }}
        >
          <Form />
        </Box>
      </Box>
    </>
  )
}

export default TextForm
