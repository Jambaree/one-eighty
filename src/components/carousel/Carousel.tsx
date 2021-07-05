import React, { useState } from "react"
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
  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()

  const settingsSlider1 = {
    arrows: true,
    dots: false,
    infinite: true,
    autoplaySpeed: 8000,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          prevArrow: "",
        },
      },
    ],
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  }

  const settingsSlider2 = {
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
    prevArrow: "",
    nextArrow: <RightArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
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
        position: "relative",
      }}
    >
      <Box
        sx={{
          ".slick-next:before, .slick-prev:before": {
            content: "none",
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
                    "48px 15px 38px 0px",
                    "80px 15px 80px 0px",
                    "100px 15px 76px 0px",
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
                      pl: [0, "15px", "30px"],
                    }}
                  />
                )}
              </Box>
              <Box
                sx={{
                  width: "100%",
                  pl: [0, "15px", "15px"],
                  pr: [24, 0, 0],

                  ".slick-arrow": {
                    transform: "translateY(-40px)",
                  },
                  img: {
                    filter: "grayscale(100%)",
                  },
                  ".slick-current img": {
                    filter: "none",
                  },
                  ".slick-slide:not(.slick-active)": {
                    opacity: 0.5,
                  },
                }}
              >
                <Slider
                  {...settingsSlider2}
                  asNavFor={nav1}
                  ref={(slider2) => setNav2(slider2)}
                >
                  {cards &&
                    cards.map((o, i) => {
                      return (
                        <Box
                          key={i}
                          sx={{
                            maxWidth: 208,
                            px: [0, "5px", "5px"],
                          }}
                        >
                          <Box
                            sx={{
                              img: {
                                width: "100%",
                                objectFit: "contain",
                                height: 172,
                              },
                            }}
                          >
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
                          <Box sx={{ maxWidth: 360, mt: "10px" }}>
                            {o.heading && (
                              <Heading
                                children={Parser(o.heading)}
                                variant="styles.h6"
                              />
                            )}
                            {o.subheading && (
                              <Heading
                                children={Parser(o.subheading)}
                                variant="text.jobTitle"
                                sx={{ color: "textLightGray", mt: "4px" }}
                              />
                            )}
                          </Box>
                        </Box>
                      )
                    })}
                </Slider>
              </Box>
              <Box sx={{ width: ["95%", "90%", "80%"], mt: 50 }}>
                <Slider
                  {...settingsSlider1}
                  asNavFor={nav2}
                  ref={(slider1) => setNav1(slider1)}
                >
                  {cards &&
                    cards.map((o, i) => {
                      return (
                        <Box
                          key={i}
                          sx={{
                            display: "flex!important",
                            flexDirection: ["column", "column", "row"],
                            maxWidth: "100%",
                            px: [0, 15, 15],
                            m: "0 auto",
                          }}
                        >
                          <Box
                            sx={{
                              maxWidth: ["100%", "100%", "50%"],
                              m: "0 auto",
                              img: {
                                objectFit: "contain",
                                height: 480,
                                width: 360,
                              },
                            }}
                          >
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
                          <Box
                            sx={{
                              maxWidth: ["100%", "100%", "50%"],
                              pl: [0, 0, 88],
                            }}
                          >
                            {o.heading && (
                              <Heading
                                children={Parser(o.heading)}
                                variant="styles.h4name"
                                sx={{
                                  pt: 34,
                                  mb: "5px",
                                  color: "blue180",
                                  width: 360,
                                }}
                              />
                            )}
                            {o.subheading && (
                              <Heading
                                children={Parser(o.subheading)}
                                variant="text.jobTitle"
                                sx={{
                                  mb: 20,
                                  color: "blue180",
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
          </Box>
        </Edges>
      </Box>
    </Box>
  )
}

export default Carousel
