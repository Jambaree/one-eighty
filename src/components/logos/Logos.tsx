import React from "react"
import { Box, Grid, Heading, Text, Link } from "theme-ui"
import { ChevronRight } from "mdi-material-ui"
import { useStore } from "../../store"

// import app components
import Edges from "../Edges"
import BackgroundImage from "../BackgroundImage"
// import Modal from "../Modal"

const Logos = (props) => {
  const { columns, headline, subheading, cards } = props

  const [
    {
      appState: { menu },
      userState: { isLoggedIn, user },
    },
    dispatch,
  ] = useStore()

  return (
    <Box sx={{ bg: "white", mt: 104, mb: 154, position: "relative" }}>
      <Edges size="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            m: "162px auto 36px auto",
            "&:after": {
              content: "''",
              position: "relative",
              mt: 90,
              mb: ["-210px", "-230px", "-82px"],
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
              children={headline}
              variant="styles.h2"
              sx={{
                m: "0 auto 36px auto",
                width: ["80%", "100%", "100%"],
              }}
            />
          )}
          {subheading && (
            <Text
              children={subheading}
              variant="text.introduction"
              sx={{ px: 250 }}
            />
          )}
        </Box>
        <Grid gap={5} columns={[1, 2, columns]}>
          {cards &&
            cards.map((o, i) => {
              return (
                <Box key={i}>
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
                          height: 186,
                          position: "relative",
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
                      <Text children={o.text} variant="text.paragraph" />
                    )}
                  </Box>
                  <Box sx={{ width: 30, m: "0 auto" }}>
                    {o.modal?.modallink?.url && (
                      <Box
                        sx={{
                          cursor: "pointer",
                          height: "30px",
                          borderRadius: "50%",
                          bg: "coral",
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
                        onClick={() =>
                          dispatch({
                            type: "SET_MODAL",
                            payload: {
                              text: o.modal.modaltext,
                              image: o.modal.modalimage,
                              link: o.modal.modallink,
                            },
                          })
                        }
                      >
                        <ChevronRight
                          style={{
                            height: "30px",
                            width: "30px",
                            borderRadius: "50%",
                            backgroundColor: "transparent",
                            fill: "white",
                          }}
                        />
                      </Box>
                    )}
                  </Box>
                </Box>
              )
            })}
        </Grid>
      </Edges>
    </Box>
  )
}

export default Logos
