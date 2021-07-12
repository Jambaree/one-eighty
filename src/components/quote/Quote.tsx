import React from "react"
import { Box, Container, Divider } from "theme-ui"
import { useInView } from "react-intersection-observer"
import { jsx, css, keyframes } from "@emotion/react"

// import app components
import Textarea from "../Textarea"

const Quote = (props) => {
  const { text, backgroundcolor } = props
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
  })

  const fadeOutLeft = keyframes`
    from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }`

  const fadeOutRight = keyframes`
    from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }`

  return (
    <Container
      ref={ref}
      sx={{
        position: "relative",
        my: "50px",
        py: "50px",
        bg: backgroundcolor,
      }}
    >
      <Box
        sx={{
          "&:before": {
            content: "''",
            position: "absolute",
            zIndex: 2,
            top: "50%",
            transform: "translateY(-50%)",
            left: 0,
            width: "4px",
            height: "134px",
            bg: "red",
          },
          "&:after": {
            content: "''",
            position: "absolute",
            zIndex: 2,
            top: "50%",
            transform: "translateY(-50%)",
            right: 0,
            width: "4px",
            height: "134px",
            bg: "red",
          },
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            zIndex: 3,
            height: "134px",
            width: "100%",
            bg: "red",

            animation: inView ? `${fadeOutLeft} .8s ease forwards` : "none",
          }}
        />
        <Divider
          color="red"
          sx={{
            width: ["20px", "40px", "135px"],
            mx: ["10px", "25px"],
            borderBottom: "4px solid",
            display: ["none", "block"],
          }}
        />
        <Box
          sx={{
            px: ["30px", 0],
            maxWidth: "708px",
            "div > *": {
              color: `${backgroundcolor === "blue180" ? "white" : "blue180"}`,
            },
          }}
        >
          <Textarea content={text} />
        </Box>

        <Divider
          color="red"
          sx={{
            width: ["20px", "40px", "135px"],
            mx: ["10px", "25px"],
            borderBottom: "4px solid",
            display: ["none", "block"],

            "@media (min-width:1150px)": { mr: "112px" },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            height: "134px",
            width: "25%",
            bg: "red",
            zIndex: 3,

            animation: inView ? `${fadeOutRight} .8s ease forwards` : "none",
          }}
        />
      </Box>
    </Container>
  )
}

export default Quote
