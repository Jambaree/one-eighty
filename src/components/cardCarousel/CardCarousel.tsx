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
            width: "38px",
            height: "38px",
            top: "130%",
          },
          ".slick-prev": {
            left: "46%",
          },
          ".slick-next": {
            right: "46%",
          },
        }}
      >
        <Edges size="md">
          <Box sx={{ pb: 250 }}>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", py: 124 }}>
                {headline && (
                  <Heading
                    children={headline}
                    variant="styles.h1"
                    sx={{
                      fontSize: "12",
                    }}
                  />
                )}

                {subheading && (
                  <Text children={subheading} variant="text.introduction" />
                )}
              </Box>
              <Slider {...settings}>
                {cards &&
                  cards.map((o, i) => {
                    return (
                      <Box
                        key={i}
                        sx={{
                          maxWidth: 350,
                          px: 15,
                        }}
                      >
                        {o.image && (
                          <GatsbyImage image={o.image} alt={o.image.altText} />
                        )}
                        {o.heading && (
                          <Heading
                            children={o.heading}
                            // variant="styles.h3"
                            // sx={{
                            //   display: "block",
                            //   mb: 86,
                            //   fontSize: ["26px", "32px", "32px"],
                            //   lineHeight: ["39px", "46px", "46px"],
                            // }}
                          />
                        )}
                        {o.text && (
                          <Text
                            children={o.text}
                            // variant="text.heading"
                            // sx={{
                            //   display: "block",
                            //   mb: "8px",
                            //   fontSize: "5",
                            //   letterSpacing: "-0.33px",
                            //   "&:before": {
                            //     content: "''",
                            //     position: "absolute",
                            //     m: "-15px 0",
                            //     height: 4,
                            //     width: 38,
                            //     zIndex: 1,
                            //     backgroundColor: "charcoal",
                            //   },
                            // }}
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
