/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import { Heading } from "theme-ui"

// import app components
import Edges from "../Edges"
import BackgroundImage from "../BackgroundImage"
import BackgroundVideo from "../BackgroundVideo"

const Hero = (props) => {
  const { headline, image, filevideo } = props

  return (
    <Container>
      <Edges size="md">
        <Content>
          {headline && (
            <Heading
              as="h1"
              variant="styles.h3"
              children={headline}
              sx={{
                fontWeight: 400,
                width: "100%",
                textAlign: "start",
                marginBottom: 20,
                color: "#fff",
              }}
            />
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
        {image && <BackgroundImage image={image} sx={{ zIndex: 1 }} />}
      </MediaContainer>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  height: ${({ theme: { headerHeight } }) => `calc(100vh - ${headerHeight}px)`};
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
