import React from "react"
import { Box, Heading, Text } from "theme-ui"
import Slider from "react-slick"
import { GatsbyImage } from "jam-cms"
import Parser from "html-react-parser"

// import app components
import Edges from "../Edges"
import "../../styles/slick/slick.css"
import "../../styles/slick/slick-theme.css"

const CardCarousel = (props) => {
  const { headline, subheading, cards } = props

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    autoplaySpeed: 8000,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <Box
      sx={{
        bg: "almondLight",
        position: "relative",
      }}
    >
      <Box
        sx={{
          ".slick-next:before, .slick-prev:before": {
            color: "coral",
            backgroundColor: "white",
            border: "1px solid",
            borderColor: "black25",
            borderRadius: "50%",
            p: "8px 16px 10px",
          },
          ".slick-next:before": {
            content: "'›'",
          },
          ".slick-prev:before": {
            content: "'‹'",
          },
          ".slick-prev": {
            width: 42,
            height: 42,
            left: -60,
            transform: "translateY(-125px)",
            "@media (max-width: 1200px)": {
              transform: "translateY(250px)",
              left: "45%",
            },
            "@media (max-width: 1000px)": {
              left: "42%",
            },
            "@media (max-width: 660px)": {
              left: "36%",
            },
          },
          ".slick-next": {
            width: 42,
            height: 42,
            right: -60,
            transform: "translateY(-125px)",
            "@media (max-width: 1200px)": {
              transform: "translateY(250px)",
              right: "45%",
            },
            "@media (max-width: 1000px)": {
              right: "42%",
            },
            "@media (max-width: 660px)": {
              right: "36%",
            },
          },
        }}
      >
        <Edges size="md">
          <Box sx={{ pb: 125 }}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: ["column", "row", "row"],
                  alignItems: "flex-start",
                  p: [
                    "48px 15px 38px 15px",
                    "80px 15px",
                    "100px 15px 76px 15px",
                  ],
                }}
              >
                {headline && (
                  <Heading
                    children={Parser(headline)}
                    variant="styles.h1"
                    sx={{
                      fontSize: "12",
                      pb: ["24px", "unset", "unset"],
                      pr: "10px",
                    }}
                  />
                )}

                {subheading && (
                  <Text
                    children={Parser(subheading)}
                    variant="text.introduction"
                    sx={{
                      pt: "8px",
                      fontSize: "18px",
                      lineHeight: ["25px", "30px", "30px"],
                    }}
                  />
                )}
              </Box>
              <Slider {...settings}>
                {cards &&
                  cards.map((o, i) => {
                    return (
                      <Box
                        key={i}
                        sx={{
                          maxWidth: "100%",
                          px: 15,
                          m: "0 auto",
                          img: {
                            borderRadius: "6px",
                          },
                        }}
                      >
                        {o.image ? (
                          <GatsbyImage image={o.image} alt={o.image?.altText} />
                        ) : (
                          <GatsbyImage
                            image={o.defaultimage}
                            alt={o.defaultimage?.altText}
                          />
                        )}
                        {o.heading && (
                          <Heading
                            children={Parser(o.heading)}
                            variant="styles.h5"
                            sx={{
                              pt: 34,
                              fontSize: "22px",
                              letterSpacing: "-0.33px",
                              mb: 10,
                            }}
                          />
                        )}
                        {o.text && (
                          <Text
                            children={Parser(o.text)}
                            variant="text.introduction"
                            sx={{
                              lineHeight: "25px",
                            }}
                          />
                        )}
                      </Box>
                    )
                  })}
              </Slider>
            </Box>
          </Box>
        </Edges>
      </Box>
    </Box>
  )
}

export default CardCarousel
