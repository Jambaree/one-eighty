import React from "react"
import { Box, Heading, Text } from "theme-ui"
import Parser from "html-react-parser"

// import app components
import Form from "../../components/Form"
import Textarea from "../../components/Textarea"

const TextForm = (props) => {
  const { formbackground, alignment, copy, disclaimer } = props

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
            width: ["100%", null, "calc(55% - 140px)"],
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
              pt: [100, 75, "unset"],
              margin: "0 auto",
              width: ["100%", "100%", "90%"],
              maxWidth: [null, 700, 700],
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                "p, a": {
                  fontFamily: "body",
                  fontSize: 5,
                  lineHeight: "30px",
                  fontWeight: "light",
                  letterSpacing: "-0.27px",
                  color: "black75",
                  "@media (max-width: 767px)": {
                    lineHeight: "25px",
                    letterSpacing: "-0.24px",
                    fontSize: 4,
                  },
                },

                a: {
                  color: "coral",
                  fontStyle: "normal",

                  "&:hover": {
                    color: "coralDark",
                  },
                  "&:focus": {
                    color: "coralLight",
                  },
                  "&:disabled": {
                    color: "black25",
                  },
                },
              }}
            >
              {copy && <Textarea content={copy} />}
            </Box>
            {disclaimer && (
              <Text
                as="p"
                children={Parser(disclaimer)}
                variant="text.paragraph"
                sx={{
                  pt: 70,
                  fontSize: "10px",
                  letterSpacing: "-0.1px",
                  lineHeight: "18px",
                  "@media (max-width: 767px)": {
                    lineHeight: "18px",
                    fontSize: "10px",
                  },
                }}
              />
            )}
          </Box>
        </Box>
        <Box
          sx={{
            order: alignment === "left" ? 2 : 1,
            height: "auto",
            width: ["100%", "100%", "45%"],
            maxWidth: 700,
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
