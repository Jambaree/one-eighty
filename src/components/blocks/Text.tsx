"use client"
import React from "react"
import { Box } from "theme-ui"
import { useInView } from "react-intersection-observer"
import { keyframes } from "@emotion/react"

// import app components
import Edges from "../Edges"
import Textarea from "../Textarea"
import Button from "../Button"

const Text = (props) => {
  const { text, lightdark, extrapadding, fade, buttons } = props
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: fade === "fadein" ? 0 : 0.25,
  })

  const fadeInUp = keyframes`
    from {
      opacity: 0;
      transform: translate3d(0, 50px, 0);
    }
  
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `
  const fadeIn = keyframes`
    from {
      opacity: 0;
  
    to {
      opacity: 1;
     
    }
  `

  return (
    <Box
      ref={ref}
      sx={{
        bg: lightdark === "dark" && "blue180",
        color: lightdark === "dark" && "white",
        pb: extrapadding === 0 ? 125 : 25,
      }}
    >
      <Edges size="lg">
        <Box
          sx={{
            animation: inView
              ? `${fade === "fadein" ? fadeIn : fadeInUp} ${
                  fade === "fadein" ? "5s ease" : ".8s ease"
                }`
              : "none",
            py: [4, "50px"],
            width: ["100%", "65%", "65%"],
            "div > *": {
              color: lightdark === "dark" && "white",
            },
          }}
        >
          <Textarea content={text} />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            animation: inView
              ? `${fade === "fadein" ? fadeIn : fadeInUp} ${
                  fade === "fadein" ? "5s ease" : ".8s ease"
                }`
              : "none",
          }}
        >
          {buttons &&
            buttons.length > 0 &&
            buttons.map((o, i) => (
              <Box sx={{ mr: "40px", mb: "40px" }}>
                {o.link && o.link.title && (
                  <Button
                    customeVariant={lightdark !== "dark" && "secondary"}
                    to={o.link.url}
                  >
                    {o.link.title}
                  </Button>
                )}
              </Box>
            ))}
        </Box>
      </Edges>
    </Box>
  )
}

export default Text
