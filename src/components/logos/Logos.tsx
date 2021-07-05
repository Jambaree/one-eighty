import React from "react"
import { GatsbyImage } from "jam-cms"
import { Box, Heading, Container, Grid, Text } from "theme-ui"
import Parser from "html-react-parser"

// import app components
import Edges from "../Edges"
import Link from "../Link"
import { formatLink } from "../../utils"

const Logos = (props) => {
  const { cards, headline, columns } = props

  return (
    <Container
      sx={{
        pt: ["70px", "90px", "120px"],
        pb: ["120px", "180px", "240px"],
      }}
    >
      <Edges size="cmd">
        {headline && (
          <Heading
            variant="styles.h1"
            sx={{
              color: "blue180",
              pb: "75px",
            }}
            children={Parser(headline)}
          />
        )}
      </Edges>
      <Grid
        sx={{
          py: ["30px", "65px"],
          px: ["30px", "70px", "90px"],
          "@media (min-width:1200px)": { px: "140px" },
          mx: "20px",
          gap: ["50px", "60px", "130px"],
          border: "1px solid transparent",
          borderImage: "linear-gradient(to left, #122D4C 20%,  #BC001F 80%)",
          borderImageSlice: 1,
        }}
        columns={[1, 2, columns]}
      >
        {cards &&
          cards.map((o, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "85px",
              }}
            >
              {o.logo ? (
                <Link activeStyle={{}} to={o.url}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "185px",
                      height: "85px",
                      "&:hover": { cursor: "pointer" },
                      svg: { width: "185px", height: "85px" },
                    }}
                  >
                    {o.logo?.svg ? (
                      Parser(o.logo.svg)
                    ) : (
                      <GatsbyImage
                        image={o.logo}
                        alt={o.logo?.altText}
                        objectFit="contain"
                        objectPosition="0"
                      />
                    )}
                  </Box>
                </Link>
              ) : (
                <Link activeStyle={{}} to={o.url}>
                  <Text
                    variant="styles.h4"
                    sx={{
                      color: "termsPrivacy",
                      width: "185px",
                      height: "85px",
                      "&:hover": { color: "red", cursor: "pointer" },
                    }}
                  >
                    {Parser(o.text || "")}
                  </Text>
                </Link>
              )}
            </Box>
          ))}
      </Grid>
    </Container>
  )
}

export default Logos
