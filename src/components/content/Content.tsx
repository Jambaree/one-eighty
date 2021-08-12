import React, { useState } from "react"
import { GatsbyImage } from "jam-cms"
import { Box, Heading, Container, Text, Radio, Label } from "theme-ui"
import Parser from "html-react-parser"

// import app components
import Edges from "../Edges"
import Textarea from "../Textarea"

const Content = (props) => {
  const { text, heading, image, backgroundcolor, sections } = props

  const [sector, setSector] = useState(0)

  console.log(sector)
  const handleChangeSector = (value) => {
    setSector(value)
  }

  return (
    <Container
      sx={{
        bg: backgroundcolor,
        py: [4, 5, 6],
        position: "relative",
      }}
    >
      <Edges size="lg">
        {heading && (
          <Heading
            variant="styles.root.h1"
            sx={{
              color: `${backgroundcolor === "blue180" ? "white" : "blue180"}`,
            }}
            children={Parser(heading || "")}
          />
        )}
        <Box
          sx={{
            "div > *": {
              color: `${backgroundcolor === "blue180" ? "white" : "black"}`,
            },
            width: ["100%", "75%", "53%"],
            pb: 90,
          }}
        >
          {text && <Textarea content={text} />}
        </Box>
      </Edges>

      <Box
        sx={{
          display: "flex",
          "@media (max-width:830px)": { flexDirection: "column" },
        }}
      >
        <Box
          sx={{
            height: "450px",
            width: "500px",
            "@media (max-width:830px)": { width: "100%" },
            position: "absolute",
            "@media (max-width:1200px)": { position: "relative" },

            left: 0,
            top: "30%",
            zIndex: 2,
            "&:after": {
              content: "''",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.6)",
              mixBlendMode: "multiply",
              zIndex: -10,
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "grid",
              flexDirection: "column",
              alignItems: "flex-end",
              gridTemplateColumns: "40% 60%",
              "@media (max-width:830px)": { gridTemplateColumns: "10% 90%" },
              gridTemplateRows: "1fr",
            }}
          >
            <Box
              sx={{
                gridColumnStart: 2,
                gridColumnEnd: 3,
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Text
                variant="text.FilterMapHeading"
                children="FILTER BY SECTOR"
                sx={{
                  color: "white",
                  pt: "40px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
                  width: "100%",
                  pb: "5px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
                  pt: 15,
                }}
              >
                {sections &&
                  sections.length > 0 &&
                  sections.map((o, i) => (
                    <>
                      {o.sectorname && (
                        <Label
                          key={i}
                          onClick={() => setSector(i)}
                          sx={{ color: "white", pb: 15, alignItems: "center" }}
                        >
                          <Radio
                            name="dark-mode"
                            value={o.sectorname}
                            defaultChecked={i === sector}
                          />
                          <Text
                            variant="text.companyName"
                            children={Parser(o.sectorname)}
                          />
                        </Label>
                      )}
                    </>
                  ))}
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Text
                  variant="text.sectorName"
                  children={sections?.[sector]?.sectorname}
                  sx={{
                    color: "white",
                    width: "100%",
                    pt: 30,
                  }}
                />
                <Text
                  variant="text.projectNumber"
                  sx={{
                    color: "white",
                    width: "100%",
                    pt: 10,
                    pb: "60px",
                  }}
                >
                  {sections?.[sector]?.projects} PROJECTS
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "100%",
            "@media (max-width:1200px)": { ml: 0 },
            ml: "400px",
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            p: "12px",
            "gatsby-image-wrapper": {
              maxWidth: "1070px",
            },
          }}
        >
          {sections?.[sector]?.image && (
            <GatsbyImage image={sections?.[sector]?.image} />
          )}
        </Box>
      </Box>
    </Container>
  )
}

export default Content
