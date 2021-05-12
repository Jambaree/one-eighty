import React from "react"
import { Box, Grid, Heading } from "theme-ui"

// import app components
import Edges from "../Edges"
import BackgroundImage from "../BackgroundImage"

const Logos = (props) => {
  const { images, headline } = props

  return (
    <Edges size="sm">
      {headline && <Heading children={headline} sx={{ textAlign: "center" }} />}
      <Grid gap={2} columns={[1, 2, 3]}>
        {images &&
          images.map((o, i) => {
            return (
              <Box key={i} sx={{ position: "relative", height: 100 }}>
                {o.image && <BackgroundImage image={o.image} />}
              </Box>
            )
          })}
      </Grid>
    </Edges>
  )
}

export default Logos
