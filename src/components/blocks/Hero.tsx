"use client"
import styled from "@emotion/styled"
import { Box } from "theme-ui"

// import app components
import Edges from "../Edges"
import BackgroundImage from "../BackgroundImage"
import BackgroundVideo from "../BackgroundVideo"
import Parser from "html-react-parser"

const Hero = (props) => {
  const { headline, image, filevideo } = props

  return (
    <Container>
      <Edges size="lg">
        <Content>
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
        </Content>
      </Edges>
      <MediaContainer>
        {filevideo?.mediaItemUrl && (
          <BackgroundVideoContainer>
            <BackgroundVideo src={filevideo?.mediaItemUrl} />
          </BackgroundVideoContainer>
        )}
        {image && <BackgroundImage image={image} sx={{ zIndex: 1 }} />}
      </MediaContainer>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  height: ${({ theme: { headerHeight } }) => `calc(100vh - ${headerHeight})`};
  display: flex;
  align-items: center;
`

const MediaContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

const BackgroundVideoContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`

const Content = styled.div`
  position: relative;
  z-index: 3;
  max-width: 550px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-bottom: 185px;
`

export default Hero
