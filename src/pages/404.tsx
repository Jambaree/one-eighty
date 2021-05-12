import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

// import app components
import theme from "../theme"

const FourOhFor = () => {
  return (
    <Container>
      <ErrorMessage>
        <h1>404</h1>
      </ErrorMessage>
      <p>Oops, we can't find the page you're looking for.</p>
      <p>
        Return <Link to="/">home</Link>.
      </p>
    </Container>
  )
}

export default FourOhFor

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5vw;

  a {
    color: inherit;
    &:hover {
      color: ${theme.colors.primary};
    }
  }
`

const ErrorMessage = styled.div`
  color: ${theme.colors.primary};
  opacity: 0.8;
`
