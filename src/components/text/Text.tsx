import React from "react"
import { Box } from "theme-ui"
import { useInView } from "react-intersection-observer"
import { jsx, css, keyframes } from "@emotion/react"

// import app components
import Edges from "../Edges"
import Textarea from "../Textarea"

const Text = (props) => {
  const { text } = props
  const { ref, inView, entry } = useInView({})

  const fadeInUp = keyframes`
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
  
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `

  return (
    <Box ref={ref}>
      <Edges size="cmd">
        <Box
          sx={{
            animation: inView ? `${fadeInUp} 2s ease` : "none",
            py: [4, 5, 6],
            pr: [0, "100px", "300px"],
          }}
          py={[4, 5, 6]}
          pr={[0, "100px", "300px"]}
        >
          <Textarea content={text} />
        </Box>
      </Edges>
    </Box>
  )
}

export default Text
