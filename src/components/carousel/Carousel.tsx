import React from "react"
import { Box, Heading, Text } from "theme-ui"
import Slider from "react-slick"
import { GatsbyImage } from "jam-cms"
import Parser from "html-react-parser"

// import app components
import Edges from "../Edges"
import "../../styles/slick/slick.css"
import "../../styles/slick/slick-theme.css"
import LeftArrow from "../../icons/arrow-left.svg"
import RightArrow from "../../icons/arrow-right.svg"

const Carousel = (props) => {
  const { headline, cards } = props

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    autoplaySpeed: 8000,
    autoplay: false,
    slidesToShow: 1,
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
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  }

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          ".slick-next:before, .slick-prev:before": {
            content: "none",
          },
          // ".slick-prev, .slick-next": {
          //   width: 30,
          //   height: 30,
          //   bottom: -80,
          //   top: "unset",
          //   "@media (min-width: 1200px)": {
          //     bottom: "unset",
          //     top: 120,
          //   },
          // },
          // ".slick-prev": {
          //   left: "calc(50% - 40px)",
          //   transform: "translateY(-50%) rotate(180deg)",
          //   "@media (min-width: 1200px)": {
          //     left: -60,
          //   },
          // },
          // ".slick-next": {
          //   right: "calc(50% - 40px)",
          //   transform: "translateY(-50%)",
          //   "@media (min-width: 1200px)": {
          //     right: -60,
          //   },
          // },
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
                    variant={`styles.h2`}
                    as="h2"
                    sx={{
                      pb: ["24px", "unset", "unset"],
                      pr: "10px",
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
                          display: "flex!important",
                          maxWidth: "100%",
                          width: 800,
                          px: 15,
                          m: "0 auto",
                          img: {
                            objectFit: "contain",
                            height: 480,
                          },
                        }}
                      >
                        <Box sx={{ maxWidth: 360, mr: 88 }}>
                          {o.image ? (
                            <GatsbyImage
                              image={o.image}
                              alt={o.image?.altText}
                            />
                          ) : (
                            <GatsbyImage
                              image={o.defaultimage}
                              alt={o.defaultimage?.altText}
                            />
                          )}
                        </Box>
                        <Box sx={{ maxWidth: 360 }}>
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
                              variant="text.paragraph"
                              sx={{
                                lineHeight: "25px",
                              }}
                            />
                          )}
                        </Box>
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

export default Carousel
