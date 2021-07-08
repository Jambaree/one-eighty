/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import { Box } from "theme-ui"
import { RichText } from "jam-cms"
import { Parallax } from "react-parallax"

// import app components
import Edges from "../Edges"
import BackgroundVideo from "../BackgroundVideo"

const Hero = (props) => {
  const { headline, image, filevideo } = props
  console.log(image)
  return (
    <Container>
      <Edges size="cmd">
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
              <RichText children={headline} />
            </Box>
          )}
        </Content>
      </Edges>
      <MediaContainer>
        {(filevideo?.localFile?.publicURL || filevideo?.url) && (
          <BackgroundVideoContainer>
            <BackgroundVideo
              src={filevideo?.localFile?.publicURL || filevideo?.url}
            />
          </BackgroundVideoContainer>
        )}
        {image && (
          <Parallax bgImage={image.url} strength={500}>
            <div style={{ height: `calc(100vh - 60px)` }} />
          </Parallax>
        )}
      </MediaContainer>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  z-index: 0;
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
  z-index: 2;
`

const BackgroundVideoContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
`

const Content = styled.div`
  position: relative;
  z-index: 4;
  max-width: 580px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

export default Hero
