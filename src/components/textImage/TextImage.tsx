import React from "react"
import { Box, Heading, Text, IconButton } from "theme-ui"
import Parser from "html-react-parser"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import app components
import Edges from "../Edges"
import Button from "../Button"
import Textarea from "../Textarea"

const TextImage = (props) => {
  const {
    backgroundcolor,
    image,
    giffile,
    alignment,
    headline,
    headlinestyle = "h2",
    text,
    bullet,
    link,
  } = props

  const imageData = image?.localFile && getImage(image.localFile)

  return (
    <Box
      sx={{
        backgroundColor: backgroundcolor,
      }}
    >
      <Edges size="lg">
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: alignment === "left" ? "row" : "row-reverse",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            py: 100,
          }}
        >
          <Box
            sx={{
              width: ["100%", "100%", "calc(50% - 25px)"],
              overflow: "hidden",
            }}
          >
            {image
              ? imageData && (
                  <GatsbyImage
                    image={imageData}
                    alt={image?.altText || ""}
                    style={{
                      maxWidth: "100%",
                      objectFit: "contain",
                      borderRadius: "8px",
                      transform: "translateZ(0)",
                    }}
                  />
                )
              : giffile && (
                  <Box sx={{ maxWidth: "100%" }}>
                    <img
                      src={giffile.sourceUrl}
                      style={{ borderRadius: "8px" }}
                    />
                  </Box>
                )}
          </Box>

          <Box
            sx={{
              width: ["100%", null, "calc(50% - 25px)"],
              height: "100%",
              my: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              pt: 36,
            }}
          >
            {headline && (
              <Heading
                children={Parser(headline)}
                variant={`styles.${headlinestyle}`}
                as={headlinestyle}
                sx={{ pb: 36 }}
              />
            )}

            {text && (
              <Box
                sx={{
                  pb: 36,

                  "p, a": {
                    fontFamily: "body",
                    fontSize: 5,
                    lineHeight: "30px",
                    fontWeight: "light",
                    letterSpacing: "-0.27px",
                    color: "black75",
                    "@media (max-width: 767px)": {
                      lineHeight: "25px",
                      letterSpacing: "-0.24px",
                      fontSize: 4,
                    },
                  },
                }}
              >
                <Textarea content={text} />
              </Box>
            )}

            {bullet &&
              bullet.map((o, i) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      mb: "25px",
                    }}
                  >
                    <IconButton
                      sx={{
                        mr: "10px",
                        transform: "translateY(-4px)",
                        svg: { width: "16px" },
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 152.0783 145.0235"
                      >
                        <polygon
                          points="10.843 134.181 10.843 10.944 98.218 10.944 103.639 0.101 0 0.101 0 145.024 31.19 145.024 25.775 134.181 10.843 134.181"
                          fill="#dedbd8"
                        />
                        <polygon
                          points="134.079 134.181 97.093 134.181 91.67 145.024 144.922 145.024 144.922 38.55 134.079 60.229 134.079 134.181"
                          fill="#dedbd8"
                        />
                        <polygon
                          points="115.823 0 115.773 0.101 61.432 108.77 44.071 73.975 25.934 110.262 25.935 110.266 43.307 145.022 79.571 145.012 152.078 0 115.823 0"
                          fill="#d46349"
                        />
                      </svg>
                    </IconButton>
                    <Text
                      as="p"
                      variant="text.paragraph"
                      sx={{ maxWidth: "90%" }}
                    >
                      {o.text}
                    </Text>
                  </Box>
                )
              })}

            {link?.url && (
              <Button variant="primary" to={link.url} mb={50}>
                {link.title && Parser(link.title)}
              </Button>
            )}
          </Box>
        </Box>
      </Edges>
    </Box>
  )
}

export default TextImage
