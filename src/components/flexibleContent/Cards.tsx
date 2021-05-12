import React from "react"
import { Box, Grid, Heading, Text, jsx } from "theme-ui"
import { Link } from "gatsby"

// import app components
import Edges from "../Edges"
import BackgroundImage from "../BackgroundImage"

const Cards = (props) => {
  const { columns, cards } = props

  return (
    <Edges size="sm">
      <Grid gap={2} columns={[1, 2, columns.length]}>
        {cards &&
          cards.map((o, i) => {
            return (
              <Box key={i} sx={{ m: "0 12px" }}>
                <Box sx={{ position: "relative", height: 160 }}>
                  {o.image && <BackgroundImage image={o.image} />}
                </Box>
                {o.headline && (
                  <Heading
                    children={o.headline}
                    sx={{ m: "16px 0 12px 0", fontSize: "18px" }}
                  />
                )}
                {o.text && <Text children={o.text} sx={{ fontSize: "16px" }} />}
                {<br />}
                {o.link && (
                  <Link
                    to={o.link.url}
                    children={o.link.title}
                    style={{ textDecoration: "none" }}
                  />
                )}
              </Box>
            )
          })}
      </Grid>
    </Edges>
  )
}

export default Cards
