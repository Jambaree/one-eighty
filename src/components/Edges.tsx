import React from "react"
import { Container } from "theme-ui"

interface Props {
  size?: "sm" | "md" | "cmd" | "lg"
  children?: any
  [x: string]: any
}

const Edges = (props: Props) => {
  const { size, ...rest } = props

  return (
    <Container
      sx={{
        m: "0 auto",
        width: "90%",
        maxWidth:
          (size === "sm" && "600px") ||
          (size === "md" && "1024px") ||
          (size === "cmd" && "1150px") ||
          (size === "lg" && "1280px"),
      }}
      {...rest}
    />
  )
}

export default Edges
