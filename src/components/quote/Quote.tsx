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

  const fadeInLeft = keyframes`
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }`

  const fadeInRight = keyframes`
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
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
        <Divider
          color="red"
          sx={{
            width: ["20px", "40px", "135px"],
            mx: ["10px", "25px"],
            borderBottom: "4px solid",
            display: ["none", "block"],

            animation: inView ? `${fadeInLeft} .8s ease` : "none",
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

            animation: inView ? `${fadeInRight} .8s ease` : "none",

            "@media (min-width:1150px)": { mr: "112px" },
          }}
        />
      </Box>
    </Container>
  )
}

export default Quote
