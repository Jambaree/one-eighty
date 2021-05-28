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

  console.log(props)

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    autoplaySpeed: 8000,
    autoplay: true,
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
                  alignItems: ["flex-start", "center", "center"],
                  p: ["48px 15px 38px 15px", "124px 15px", "124px 15px"],
                }}
              >
                {headline && (
                  <Heading
                    children={headline}
                    variant="styles.h1"
                    sx={{
                      fontSize: "12",
                      pb: ["24px", "unset", "unset"],
                    }}
                  />
                )}

                {subheading && (
                  <Text
                    children={subheading}
                    variant="text.introduction"
                    sx={{ pl: ["unset", "30px", "30px"] }}
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
                        }}
                      >
                        {o.image && (
                          <GatsbyImage
                            image={o.image}
                            alt={o.image.altText}
                            sx={{ border: "5px solid red" }}
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
