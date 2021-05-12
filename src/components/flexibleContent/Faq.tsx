import React, { useState } from "react"
import { Box, Heading, IconButton } from "theme-ui"
import { ChevronUp } from "mdi-material-ui"

// import app components
import Edges from "../Edges"
import Textarea from "../Textarea"

const Faq = (props) => {
  const { items } = props
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <Edges size="md" >
      <Box sx={{
        "p:last-child": {
            "mb": [12, 16, 20],
        },
        "a": {
            "font-style": "normal",
            "color": "secondary", 
            "display": "inline-block",
        },
      }}>
        {items &&
          items.map((o, i) => {
            
            return (
              <Box 
                key={i} 
                onClick={() => { setActiveIndex(i === activeIndex ? null : i) }}
                >
                {o.title &&
                  <Box sx={{ display:"flex", justifyContent:"space-between", cursor: "pointer"}}>
                    <Heading children={o.title} sx={{ mb: [12, 16, 20] }} />
                    <IconButton>
                      <ChevronUp style={{ transform: activeIndex === i ? "rotate(0)" : "rotate(180deg)" }} />
                    </IconButton>
                  </Box>
                }
                {o.text &&
                  <Box sx={{ display:  activeIndex === i ? "block" : "none" }}>
                    <Textarea content={o.text} />
                  </Box>
                }
              </Box>
            )
          })}
      </Box>
    </Edges>
  )
}

export default Faq