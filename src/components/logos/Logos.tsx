import React from "react"
import { GatsbyImage } from "jam-cms"
import { Box, Heading, Container, Grid, Text } from "theme-ui"
import Parser from "html-react-parser"

// import app components
import Edges from "../Edges"
import Textarea from "../Textarea"
import BackgroundImage from "../BackgroundImage"
import Link from "../Link"
import { formatLink } from "../../utils"

const Logos = (props) => {
  const { cards, headline, columns, backgroundcolor } = props

  return (
    <Container
      sx={{
        bg: backgroundcolor,
        pt: ["70px", "90px", "117px"],
        pb: ["120px", "180px", "236px"],
      }}
    >
      <Edges size="cmd">
        {headline && (
          <Heading
            variant="styles.h1"
            sx={{
              color: `${backgroundcolor === "blue180" ? "white" : "blue180"}`,
              pb: "75px",
            }}
            children={Parser(headline || "")}
          />
        )}
      </Edges>
      <Grid
        sx={{
          py: ["30px", "64px"],
          px: ["30px", "70px", "90px"],
          "@media (min-width:1200px)": { px: "138px" },
          mx: "20px",
          gap: ["50px", "60px", "127px"],
          border: "1px solid transparent",
          borderImage: "linear-gradient(to top, #122D4C 0%,  #BC001F 100%)",
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
              }}
            >
              {o.logo ? (
                <Link activeStyle={{}} to={formatLink(o.url)}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "186px",
                      height: "85px",
                      svg: { width: "186px", height: "85px" },
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
                        className="w-22 h-10 text-secondary-contrast "
                      />
                    )}
                  </Box>
                </Link>
              ) : (
                <Link activeStyle={{}} to={formatLink(o.url)}>
                  <Text
                    variant="styles.h4"
                    sx={{
                      color: "termsPrivacy",
                      width: "186px",
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
