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
          minHeight: 800,
          height: "auto",
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
            <Box
              sx={{
                height: 168,
                width: 168,
                bg: "plumLight",
                borderRadius: "50%",
                display: "block",
                overflow: "hidden",
                top: 0,
                position: "absolute",
                left: "-3%",
                zIndex: 0,
              }}
            />
            {headline && (
              <Heading
                children={headline}
                variant="styles.h2"
                sx={{ pt: 65, pb: 36, zIndex: 1 }}
              />
            )}
            {text && (
              <Text
                children={text}
                sx={{
                  paddingBottom: 70,
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
                }}
              />
            )}
          </Box>
        </Edges>
        <Box
          sx={{
            left: alignment === "left" ? 0 : "unset",
            right: alignment === "right" ? 0 : "unset",
            position: ["relative", null, "absolute"],
            height: "auto",
            width: ["100%", "100%", "calc(50% - 25px)"],
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
