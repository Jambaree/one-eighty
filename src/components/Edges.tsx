import React from "react"
import { Container } from "theme-ui"

interface Props {
  size?: "sm" | "md" | "lg"
  children?: any
}

const Edges = (props: Props) => {
  const { size } = props

  return (
    <Container
      sx={{
        m: "0 auto",
        width: "90%",
        maxWidth:
          (size === "sm" && "600px") ||
          (size === "md" && "1024px") ||
          (size === "lg" && "1280px"),
      }}
      {...props}
    >
      {props.children}
    </Container>
  )
}

export default Edges
