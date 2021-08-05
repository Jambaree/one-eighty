import React from "react"
import { Box } from "theme-ui"
import { useInView } from "react-intersection-observer"
import { keyframes } from "@emotion/react"

// import app components
import Edges from "../Edges"
import Textarea from "../Textarea"

const Text = (props) => {
  const { text, lightdark, extrapadding, fade } = props
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
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
        pb: extrapadding ? 125 : 25,
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
            py: [4, 5, 6],
            width: ["100%", "65%", "65%"],
          }}
        >
          <Textarea content={text} />
        </Box>
      </Edges>
    </Box>
  )
}

export default Text
