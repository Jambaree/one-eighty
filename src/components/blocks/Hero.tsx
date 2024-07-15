"use client"
import { Box } from "theme-ui"
import Edges from "../Edges"
import BackgroundImage from "../BackgroundImage"
import BackgroundVideo from "../BackgroundVideo"
import Parser from "html-react-parser"

const Hero = (props) => {
  const { headline, image, filevideo } = props

  return (
    <div className="relative flex items-center h-[calc(100vh-60px)]">
      <Edges size="lg">
        <div className="relative z-50 max-w-lg flex flex-wrap justify-start pb-48">
          {headline && (
            <Box
              variant="text.heroHeading"
              sx={{
                "*": {
                  width: "100%",
                  textAlign: "start",
                  marginBottom: 20,
                  color: "#fff",
                },
              }}
            >
              <div children={Parser(headline)} />
            </Box>
          )}
        </div>
      </Edges>
      <div className="absolute inset-0 w-full h-full">
        {filevideo?.url && (
          <div className="absolute inset-0 w-full h-full z-40">
            <BackgroundVideo src={filevideo?.url} />
          </div>
        )}
        {image && <BackgroundImage image={image} className="z-20" />}
      </div>
    </div>
  )
}

export default Hero
