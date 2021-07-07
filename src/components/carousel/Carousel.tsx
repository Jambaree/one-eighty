import React, { useState } from "react"
import { Box, Heading, Text } from "theme-ui"
import Slider from "react-slick"
import { GatsbyImage } from "jam-cms"
import Parser from "html-react-parser"

// import app components
import theme from "../../theme"
import Edges from "../Edges"
import "../../styles/slick/slick.css"
import "../../styles/slick/slick-theme.css"
import LeftArrow from "../../icons/arrow-left.svg"
import RightArrow from "../../icons/arrow-right.svg"
import Textarea from "../Textarea"

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
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: false,
          customPaging: () => (
            <div style={{ margin: "24px 0" }}>
              <div
                style={{
                  height: "6px",
                  width: "6px",
                  borderRadius: "100%",
                  backgroundColor: theme.colors.textLightGray,
                }}
              />
            </div>
          ),
        },
      },
    ],
  }

  const settingsSlider2 = {
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
    prevArrow: <LeftArrow />,
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
          dots: true,
          arrows: false,
          customPaging: () => (
            <div style={{ margin: "24px 0" }}>
              <div
                style={{
                  height: "6px",
                  width: "6px",
                  borderRadius: "100%",
                  backgroundColor: theme.colors.textLightGray,
                }}
              />
            </div>
          ),
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
          "#slider1 .slick-arrow": {
            top: 84,
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
                    variant="styles.root.h1"
                    as="h1"
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
                    border: "none",
                    borderImage: "none",
                    borderImageSlice: "none",
                  },
                  ".slick-current img": {
                    filter: "none",
                    border: "1px solid transparent",
                    borderImage:
                      "linear-gradient(to left, #122D4C 20%,  #BC001F 80%)",
                    borderImageSlice: 1,
                  },
                  ".slick-list::before": {
                    content: "''",
                    position: "absolute",
                    background: [
                      "linear-gradient(90deg, #FFFFFF 17.94%, rgba(255, 255, 255, 0.53125) 70.76%, rgba(255, 255, 255, 0) 100%)",
                    ],
                    zIndex: 1,
                    height: 258,
                    width: [12, 225, 225],
                    left: 0,
                  },
                  ".slick-list::after": {
                    content: '""',
                    position: "absolute",
                    background: [
                      "linear-gradient(90deg, #FFFFFF 17.94%, rgba(255, 255, 255, 0.53125) 70.76%, rgba(255, 255, 255, 0) 100%)",
                    ],
                    transform: "rotate(180deg)",
                    height: 258,
                    width: [80, 225, 225],
                    top: 0,
                    right: 0,
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
                              width: 172,

                              img: {
                                width: "100%",
                                height: 172,
                              },
                            }}
                          >
                            {o.image && (
                              <GatsbyImage
                                image={o.image}
                                alt={o.image?.altText}
                              />
                            )}
                          </Box>
                           <Box
                            sx={{
                              maxWidth: 360,
                              mt: "10px",
                              textAlign: "center",
                            }}
                          >
                            {o.heading && (
                              <Heading
                                children={Parser(o.heading)}
                                variant="styles.root.h6"
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
              <Box id="slider1" sx={{ width: ["100%", "90%", "87%"], mt: 75 }}>
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
                                objectFit: "contain!important",
                                height: "auto",
                                width: 375,
                                borderBottom: "1px solid",
                                borderColor: "darkBlue",
                              },
                            }}
                          >
                            {o.image && (
                              <GatsbyImage
                                image={o.image}
                                alt={o.image?.altText}
                              />
                            )}
                          </Box>
                          <Box
                            sx={{
                              maxWidth: ["100%", "100%", "50%"],
                              pl: [0, 0, 70],
                            }}
                          >
                            {o.heading && (
                              <Heading
                                children={Parser(o.heading)}
                                variant="styles.h4name"
                                sx={{
                                  pt: 34,
                                  mb: "10px",
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
                              <Box
                                variant="text.paragraph"
                                sx={{
                                  width: 360,
                                  maxWidth: "100%",
                                  lineHeight: "25px",
                                }}
                              >
                                <Textarea content={o.text} />
                              </Box>
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
