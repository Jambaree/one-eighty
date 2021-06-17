import React from "react"
import { Box, Heading, Text, IconButton } from "theme-ui"
import Slider from "react-slick"
import Parser from "html-react-parser"

// import app components
import Edges from "../Edges"
import "../../styles/slick/slick.css"
import "../../styles/slick/slick-theme.css"

const TestimonialSlider = (props) => {
  const { backgroundcolor, headline, subheading, slide } = props

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplaySpeed: 8000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    customPaging: () => (
      <div
        className="clickableArea"
        style={{
          padding: "10px",
        }}
      >
        <div
          className="current"
          style={{
            width: "8px",
            height: "8px",
            color: "#848484",
            border: "0.3px solid",
            backgroundColor: "white",
            borderRadius: "100%",
          }}
        />
      </div>
    ),
  }

  return (
    <Box
      sx={{
        bg: backgroundcolor,
        pb: [100, 182, 182],
        position: "relative",
      }}
    >
      <Box
        sx={{
          m: "0 auto",

          ".slick-dots": {
            li: {
              m: "0 5px",
              width: "8px",
              height: "8px",

              ".current": {
                ":hover": {
                  backgroundColor: "#FF7B59!important",
                  color: "#FF7B59!important",
                },
              },
            },

            ".slick-active .current": {
              color: "#E86140!important",
              bg: "#E86140!important",
            },

            "@media(max-width:1024px)": {
              textAlign: "left",
            },
          },
        }}
      >
        <Edges size="md">
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: ["column", "column", "row"],
              pt: 100,
            }}
          >
            <IconButton
              sx={{
                width: 132,
                minWidth: 132,
                height: 114,
                mb: [50, 50, "unset"],
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 258.7878"
              >
                <path
                  d="M129.7835,258.7878H0V129.7834Q0,14.7775,129.7835,0V64.5011q-62.95,2.3347-64.5011,65.2823h64.5011Zm170.2165,0H170.2166V129.7834Q170.2166,14.7775,300,0V64.5011q-62.95,2.3347-64.5011,65.2823H300Z"
                  fill="#2d4052"
                />
              </svg>
            </IconButton>
            <Box>
              {headline ? (
                <Heading
                  as="h3"
                  variant="styles.h3"
                  children={Parser(headline)}
                  sx={{
                    textAlign: "left",
                    mb: 24,
                    mr: [100, 50, 0],
                    mt: [0, 0, 60],
                    pl: [0, 0, 40],
                  }}
                />
              ) : (
                <Box
                  sx={{
                    height: [0, 0, 60],
                    width: "300px",
                    "@media (min-width: 600px)": {
                      width: "400px",
                    },
                    "@media (min-width: 1100px)": {
                      width: "892px",
                    },
                  }}
                />
              )}

              {subheading && (
                <Text
                  children={Parser(subheading)}
                  variant="text.paragraph"
                  sx={{
                    textAlign: "left",
                    display: "block",
                    mb: 64,
                    mr: [0, 50, 200],
                    pl: [0, 0, 40],
                  }}
                />
              )}
              <Slider {...settings}>
                {slide &&
                  slide.map((o, i) => {
                    return (
                      <Box
                        key={i}
                        sx={{
                          pl: [0, 0, 40],
                          mb: o.name && o.position && [60, 100, 100],
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        {o.quote && (
                          <Text
                            children={Parser(o.quote)}
                            variant="styles.h3"
                            sx={{
                              display: "block",
                              mb: o.name && 60,
                              fontSize: ["26px", "32px", "32px"],
                              lineHeight: ["39px", "46px", "46px"],
                              pr: [0, 85, 105],
                            }}
                          />
                        )}
                        {o.name && (
                          <Text
                            as="h3"
                            children={Parser(o.name)}
                            variant="styles.h3"
                            sx={{
                              display: "block",
                              mb: o.position && "8px",

                              "&:before": {
                                content: "''",
                                position: "absolute",
                                m: "-15px 0",
                                height: 4,
                                width: 38,
                                zIndex: 1,
                                backgroundColor: "charcoal",
                              },
                            }}
                          />
                        )}
                        {o.position && (
                          <Text
                            children={Parser(o.position)}
                            variant="text.introduction"
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

export default TestimonialSlider
