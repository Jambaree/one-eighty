import React from "react"
import { Box, Heading, Text, Grid } from "theme-ui"
import Slider from "react-slick"
import { GatsbyImage } from "jam-cms"

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
          ".slick-list": {
            paddingLeft: ["unset", "unset", "15%"],
          },
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
            left: ["38%", "42%", "45%"],
            top: "130%",
          },
          ".slick-next": {
            right: ["38%", "42%", "45%"],
            top: "130%",
          },
        }}
      >
        <Edges size="md">
          <Box sx={{ pb: 250 }}>
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
                    children={headline}
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
                    children={subheading}
                    variant="text.introduction"
                    sx={{ pt: "8px", fontSize: "18px", lineHeight: "30px" }}
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
                          <GatsbyImage image={o.image} alt={o.image.altText} />
                        ) : (
                          <Box
                            sx={{
                              bg: "almondDark",
                              borderRadius: "6px",
                              width: 262,
                              height: 164,
                            }}
                          />
                        )}
                        {o.heading && (
                          <Heading
                            children={o.heading}
                            variant="styles.h5"
                            sx={{
                              pt: 34,
                              fontSize: "22px",
                              letterSpacing: "-0.33px",
                            }}
                          />
                        )}
                        {o.text && (
                          <Text
                            children={o.text}
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
