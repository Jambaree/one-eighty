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
  const { headline, headlinestyle = "h2", subheading, cards } = props

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
    nextArrow: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
      >
        <g transform="translate(-7.455 39) rotate(-90)">
          <circle
            cx="15"
            cy="15"
            r="15"
            transform="translate(9 7.455)"
            fill="#fff"
          />
          <path
            d="M15,1A14,14,0,0,0,5.1,24.9,14,14,0,1,0,24.9,5.1,13.908,13.908,0,0,0,15,1m0-1A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z"
            transform="translate(9 7.455)"
            fill="#dbdbdb"
          />
          <path
            d="M8.674.268,5.117,3.825,1.561.268A.914.914,0,0,0,.268,1.561L4.476,5.768a.913.913,0,0,0,1.293,0L9.976,1.561a.913.913,0,0,0,0-1.292.933.933,0,0,0-1.3,0Z"
            transform="translate(18.5 20.25)"
            fill="#e4613f"
          />
        </g>
      </svg>
    ),
    prevArrow: (
      <Box sx={{ transform: "rotate(180deg)" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <g transform="translate(-7.455 39) rotate(-90)">
            <circle
              cx="15"
              cy="15"
              r="15"
              transform="translate(9 7.455)"
              fill="#fff"
            />
            <path
              d="M15,1A14,14,0,0,0,5.1,24.9,14,14,0,1,0,24.9,5.1,13.908,13.908,0,0,0,15,1m0-1A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z"
              transform="translate(9 7.455)"
              fill="#dbdbdb"
            />
            <path
              d="M8.674.268,5.117,3.825,1.561.268A.914.914,0,0,0,.268,1.561L4.476,5.768a.913.913,0,0,0,1.293,0L9.976,1.561a.913.913,0,0,0,0-1.292.933.933,0,0,0-1.3,0Z"
              transform="translate(18.5 20.25)"
              fill="#e4613f"
            />
          </g>
        </svg>
      </Box>
    ),
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
            position: "absolute",
            transform: "translate(-50%, -50%)",
            display: 'none'
          },
          ".slick-prev, .slick-next": {
            width: 30,
            height: 30,
            top: "120px",

            "@media (max-width: 1200px)": {
              transform: "translateY(385px)",
            },
            "@media (max-width: 1000px)": {
              transform: "translateY(420px)",
            },
            "@media (max-width: 860px)": {
              transform: "translateY(440px)",
            },
            "@media (max-width: 800px)": {
              transform: "translateY(380px)",
            },
            "@media (max-width: 660px)": {
              transform: "translateY(400px)",
            },
            "@media (max-width: 610px)": {
              transform: "translateY(450px)",
            },
            "@media (max-width: 478px)": {
              transform: "translateY(360px)",
            },
            "@media (max-width: 430px)": {
              transform: "translateY(380px)",
            },
          },
          ".slick-prev": {
            left: -60,

            "@media (max-width: 1200px)": {
              transform: "translateY(385px) rotate(180deg)",
              left: "45%",
            },
            "@media (max-width: 1000px)": {
              transform: "translateY(420px) rotate(180deg)",
              left: "42%",
            },
            "@media (max-width: 860px)": {
              transform: "translateY(440px) rotate(180deg)",
            },
            "@media (max-width: 800px)": {
              transform: "translateY(380px) rotate(180deg)",
            },
            "@media (max-width: 660px)": {
              transform: "translateY(400px) rotate(180deg)",
              left: "36%",
            },
            "@media (max-width: 610px)": {
              transform: "translateY(450px) rotate(180deg)",
            },
            "@media (max-width: 478px)": {
              transform: "translateY(360px) rotate(180deg)",
            },
            "@media (max-width: 430px)": {
              transform: "translateY(380px) rotate(180deg)",
            },
          },

          ".slick-next": {
            right: -60,

            "@media (max-width: 1200px)": {
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
                    variant={`styles.${headlinestyle}`}
                    as={headlinestyle}
                    sx={{
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
                            objectFit: "contain",
                            height: 240,
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
                            variant="text.paragraph"
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
