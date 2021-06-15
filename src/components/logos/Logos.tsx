import React, { useState } from "react"
import { Box, Grid, Heading, Text, Link } from "theme-ui"
import { ChevronRight } from "mdi-material-ui"
import Parser from "html-react-parser"

// import app components
import Edges from "../Edges"
import BackgroundImage from "../BackgroundImage"
import Modal from "../Modal"
import Textarea from "../Textarea"
import theme from "../../theme"

const Logos = (props) => {
  const { columns, headline, subheading, cards } = props

  console.log(props)

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
    <Box sx={{ bg: "white", mt: 104, mb: 154, position: "relative" }}>
      <Edges size="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            m: [
              "108px auto 36px auto",
              "132px auto 36px auto",
              "162px auto 36px auto",
            ],
            "&:after": {
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
          {headline && (
            <Heading
              children={Parser(headline)}
              variant="styles.h2"
              sx={{
                m: "0 auto 36px auto",
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
        <Grid gap={"0 64px"} columns={[1, 2, columns]}>
          {cards &&
            cards.map((o, i) => {
              return (
                <Box key={i} sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      mt: [80, 100, 100],
                    }}
                  >
                    {o.logo && (
                      <BackgroundImage
                        image={o.logo}
                        style={{
                          borderRadius: 6,
                          height: 90,
                          position: "relative",
                          width: 244,
                          margin: "0 auto 16px auto",
                        }}
                        backgroundSize="contain"
                      />
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
                          borderRadius: "50%",
                          transition: "box-shadow 0.2s",
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
                        <ChevronRight
                          style={{
                            height: "30px",
                            width: "30px",
                            border: "1px solid",
                            borderColor: theme.colors.black25,
                            borderRadius: "50%",
                            backgroundColor: "white",
                            fill: "coral",
                          }}
                        />
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
      </Edges>
    </Box>
  )
}

export default Logos
