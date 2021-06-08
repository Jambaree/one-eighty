import React from "react"
import { Box, Heading, Text, IconButton } from "theme-ui"
import Slider from "react-slick"

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
  }

  return (
    <Box
      sx={{
        bg: backgroundcolor,
        pb: 144,
        position: "relative",
      }}
    >
      <Box
        sx={{
          m: "0 auto",
          ".slick-dots": {
            position: "relative",
            mx: "auto",
            textAlign: "center",

            "@media(max-width:1024px)": {
              textAlign: "left",
            },
          },
          ".slick-dots li": {
            m: 0,
            width: 12,
          },
          ".slick-dots li button:before": {
            fontSize: 30,
            color: "white",
            opacity: "0.6",
          },
          ".slick-dots .slick-active button:before": {
            color: "coral",
            opacity: "unset",
          },
        }}
      >
        <Edges size="md">
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: ["column", "column", "row"],
              pt: 160,
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
                  children={headline}
                  sx={{
                    textAlign: "left",
                    mb: 24,
                    mr: [100, 50, 0],
                    mt: [0, 0, 60],
                    pl: [0, 0, 24],
                    fontSize: "5",
                    letterSpacing: "-0.33px",
                  }}
                />
              ) : (
                <Box sx={{ height: 50 }} />
              )}

              {subheading && (
                <Text
                  children={subheading}
                  variant="text.paragraph"
                  sx={{
                    textAlign: "left",
                    display: "block",
                    mb: 64,
                    mr: [0, 50, 200],
                    pl: [0, 0, 24],
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
                          pl: [0, 0, 24],
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        {o.quote && (
                          <Text
                            children={o.quote}
                            variant="styles.h3"
                            sx={{
                              display: "block",
                              mb: 86,
                              fontSize: ["26px", "32px", "32px"],
                              lineHeight: ["39px", "46px", "46px"],
                            }}
                          />
                        )}
                        {o.name && (
                          <Text
                            children={o.name}
                            variant="text.heading"
                            sx={{
                              display: "block",
                              mb: "8px",
                              fontSize: "5",
                              letterSpacing: "-0.33px",
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
                            children={o.position}
                            variant="text.introduction"
                            sx={{ pb: 100 }}
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
