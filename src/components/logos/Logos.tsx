import React, { useState } from "react"
import { Box, Grid, Heading, Text } from "theme-ui"
import Parser from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import app components
import Edges from "../Edges"
import BackgroundImage from "../BackgroundImage"
import Modal from "../Modal"
import Textarea from "../Textarea"

const Logos = (props) => {
  const { columns, headline, subheading, divider, cards } = props

  const [modalState, setModal] = useState(false)
  const [modalContent, setContent] = useState({
    text: "",
    image: "",
    link: "",
  })

  const handleClick = (o, i) => {
    setModal(true)
    setContent({
      text: o.modal.modaltext,
      image: o.modal.modalimage,
      link: o.modal.modallink,
    })
  }

  return (
    <Box
      sx={{
        bg: "white",
        pt: 100,
        pb: 260,
        // pb: showBottomGraphic ? 260 : 160,
        position: "relative",
      }}
    >
      {/* <PlumGraphic /> */}

      <Edges size="lg">
        <Box
          sx={{
            maxWidth: 1024,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            mt: [100, 110, 110],
            mx: "auto",
            mb: subheading === "" ? 0 : 36,
            "&:after": {
              display: divider ? "block" : "none",
              content: "''",
              position: "relative",
              mt: [52, 94, 94],
              mb: ["-30px"],
              left: "50%",
              transform: "translateX(-50%)",
              height: 4,
              width: 140,
              backgroundColor: "charcoalDark",
            },
          }}
        >
          {/* <HexagonsGraphic /> */}

          {headline && (
            <Heading
              children={Parser(headline)}
              variant="styles.h2"
              sx={{
                m: "0 auto",
                mb: subheading === "" ? 0 : 36,
                width: "100%",
                letterSpacing: "-0.42px",
              }}
            />
          )}

          {subheading && (
            <Text
              children={Parser(subheading)}
              variant="text.introduction"
              sx={{
                m: "0 auto",
                maxWidth: [640],
                width: ["unset", "75%", "50%"],
              }}
            />
          )}
        </Box>

        <Grid gap={"0 64px"} columns={[1, 2, columns]} px={30}>
          {cards &&
            cards.map((o, i) => {
              const image = o?.logo?.localFile && getImage(o.logo.localFile)

              return (
                <Box
                  key={i}
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      mt: [80, 100, 100],
                    }}
                  >
                    {o.logo && (
                      <>
                        {o.imagetype === "logo" ? (
                          <GatsbyImage
                            image={image}
                            alt={o?.logo?.altText || ""}
                          />
                        ) : (
                          <BackgroundImage
                            image={o.logo}
                            style={{
                              borderRadius: o.imagetype === "logo" ? 6 : "50%",
                              height: o.imagetype === "logo" ? 90 : 208,
                              position: "relative",
                              width: o.imagetype === "logo" ? 244 : 208,
                              margin: "0 auto 16px auto",
                            }}
                            backgroundSize={o.imagetype === "logo" && "contain"}
                          />
                        )}
                      </>
                    )}
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                      mx: [40, 20, "unset"],
                      mb: 12,
                      mt: [16, "unset", "unset"],
                    }}
                  >
                    {o.text && (
                      <Box variant="text.paragraph">
                        <Textarea content={o.text} />
                      </Box>
                    )}
                  </Box>

                  <Box sx={{ width: 30, m: "0 auto" }}>
                    {o.modal && (
                      <Box
                        sx={{
                          zIndex: modalState ? null : 1,
                          position: "absolute",
                          bottom: "-40px",
                          cursor: "pointer",
                          height: "30px",
                          transition: "box-shadow 0.2s",
                          borderRadius: "100%",
                          "&:hover": {
                            boxShadow: "0px 5px 10px #00000029",
                          },
                          "&:focus": {
                            bg: "coralLight",
                          },
                          "&:disabled": {
                            bg: "black25",
                          },
                        }}
                        onClick={() => handleClick(o, i)}
                      >
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
                    )}
                  </Box>
                </Box>
              )
            })}

          {modalState && (
            <Modal
              modalState={modalState}
              setModal={setModal}
              text={modalContent.text}
              image={modalContent.image}
              link={modalContent.link}
            />
          )}
        </Grid>

        {/* <BottomHexagonGraphic /> */}
      </Edges>
    </Box>
  )
}

export default Logos

const PlumGraphic = () => {
  return (
    <Edges
      size="lg"
      style={{
        height: 0,
        position: "relative",
        top: "-100px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: 185,
          height: 106,

          "@media screen and (min-width: 800px)": {
            position: "absolute",
            zIndex: 1,
            top: 0,
            left: 0,
          },
        }}
      >
        <CutHexagonPlum />
      </Box>
    </Edges>
  )
}

const HexagonsGraphic = () => {
  return (
    <Box
      sx={{
        display: "none",
        "@media screen and (min-width: 1345px)": {
          display: "block",
        },
        width: 140,
        height: 215,
        position: "absolute",
        zIndex: 1,
        top: 0,
        left: "calc(100% + 5px)",
      }}
    >
      <HexagonGroupFlaxTurquoise />
    </Box>
  )
}

const BottomHexagonGraphic = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: "calc(50% - (185px / 2))",
        width: 185,
        height: 106,
      }}
    >
      <CutHexagonFlax />
    </Box>
  )
}
