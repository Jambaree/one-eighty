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

  const slideOutLeft = keyframes`
    from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-250%, 0, 0);
  }`

  const slideOutRight = keyframes`
    from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(250%, 0, 0);
  }`

  const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

  return (
    <Container
      ref={ref}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        position: "relative",
        mb: 56,
        bg: backgroundcolor,
        overflow: "hidden",
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
        }}
      >
        <Divider
          color="red"
          sx={{
            width: ["20px", "40px", "135px"],
            mx: ["10px", "25px"],
            borderBottom: "2px solid",
            display: ["none", "block"],

            animation: inView ? `${fadeIn} 2s ease forwards` : "none",
            animationDelay: ".3s",
          }}
        />
        <Box
          sx={{
            px: ["30px", 0],
            maxWidth: "708px",
            minHeight: "134px",
            position: "relative",
            display: "flex",
            alignItems: "center",

            "div > *": {
              color: `${backgroundcolor === "blue180" ? "white" : "blue180"}`,
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              zIndex: 1,
              height: "100%",
              width: "100vw",
              bg: "red",
              left: 0,
              top: 0,

              animation: inView ? `${slideOutRight} 4s ease forwards` : "none",
            }}
          />
          <Box
            sx={{
              animation: inView ? `${fadeIn} 2s ease forwards` : "none",
              animationDelay: ".2s",
              "*": {
                mb: 0,
              },
            }}
          >
            <Textarea content={text} />
          </Box>
          <Box
            sx={{
              position: "absolute",
              height: "100%",
              width: "100vw",
              bg: "red",
              zIndex: 1,
              right: 0,
              top: 0,

              animation: inView ? `${slideOutLeft} 4s ease forwards` : "none",
            }}
          />
        </Box>

        <Divider
          color="red"
          sx={{
            width: ["20px", "40px", "135px"],
            mx: ["10px", "25px"],
            borderBottom: "2px solid",
            display: ["none", "block"],

            animation: inView ? `${fadeIn} 2s ease forwards` : "none",
            animationDelay: ".3s",

            "@media (min-width:1150px)": { mr: "112px" },
          }}
        />
      </Box>
    </Container>
  )
}

export default Quote
