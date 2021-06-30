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

  const settings = {
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
              <Box sx={{ width: "100%" }}>
                <Slider
                  slidesToShow={4}
                  slidesToScroll={1}
                  dots={false}
                  centerMode={false}
                  focusOnSelect={true}
                  arrows={true}
                  prevArrow={""}
                  nextArrow={<RightArrow />}
                  asNavFor={nav1}
                  ref={(slider2) => setNav2(slider2)}
                >
                  {cards &&
                    cards.map((o, i) => {
                      return (
                        <Box
                          key={i}
                          sx={{
                            width: "100%",
                            px: 15,
                          }}
                        >
                          <Box
                            sx={{
                              maxWidth: 208,
                              img: {
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
                          <Box sx={{ maxWidth: 360 }}>
                            {o.heading && (
                              <Heading
                                children={Parser(o.heading)}
                                // variant="styles.h5"
                                sx={{}}
                              />
                            )}
                          </Box>
                        </Box>
                      )
                    })}
                </Slider>
              </Box>
              <Box sx={{ width: "80%" }}>
                <Slider
                  {...settings}
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
                            maxWidth: "100%",
                            px: 15,
                            m: "0 auto",
                          }}
                        >
                          <Box
                            sx={{
                              maxWidth: 360,
                              mr: 88,
                              img: {
                                objectFit: "contain",
                                height: 480,
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
          </Box>
        </Edges>
      </Box>
    </Box>
  )
}

export default Carousel
