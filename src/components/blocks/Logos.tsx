"use client"
import React from "react"
import Image from "next/image"
import { Box, Heading, Container, Grid, Text } from "theme-ui"
import Parser from "html-react-parser"

// import app components
import Link from "next/link"

const Logos = (props) => {
  const { cards, headline, columns } = props

  return (
    <Container
      sx={{
        pt: ["70px", "90px", "120px"],
        pb: ["120px", "180px", "240px"],
      }}
    >
      <Box
        sx={{
          mx: "5%",
          "@media (min-width: 1080px)": {
            mx: "8%",
          },
        }}
      >
        {headline && (
          <Heading
            variant="styles.root.h1"
            sx={{
              px: ["60px", "70px", "90px"],
              color: "blue180",
              pb: "75px",
            }}
            children={Parser(headline)}
          />
        )}

        <Grid
          sx={{
            py: "60px",
            px: ["60px", "70px", "90px"],
            gap: ["100px", "60px"],
            "@media (min-width:1200px)": { px: "3%", gap: "110px 50px" },

            border: "1px solid transparent",
            borderImage: "linear-gradient(to left, #122D4C 20%,  #BC001F 80%)",
            borderImageSlice: 1,
          }}
          columns={[1, 2, 4]}
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
                  <Link href={o.url || "#"}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: "185px",
                        height: "85px",
                        "&:hover": { cursor: "pointer" },
                        svg: { maxWidth: "185px", height: "85px" },
                      }}
                    >
                      <Image
                        width={144}
                        height={85}
                        src={o?.logo?.url}
                        alt={o.logo?.altText}
                      />
                    </Box>
                  </Link>
                ) : (
                  <Link href={o.url || "#"}>
                    <Text
                      variant="styles.root.h4"
                      sx={{
                        color: "termsPrivacy",
                        maxWidth: "185px",
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
      </Box>
    </Container>
  )
}

export default Logos
