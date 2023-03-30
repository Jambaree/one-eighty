"use client"
import React from "react"
import { Box } from "theme-ui"

const Hexagon = (props) => {
  return (
    <>
      <Box
        {...props}
        sx={{
          width: 200,
          display: ["inline-block"],
          color: "turquoise",
          filter: 'url("#goo")',
          "&:before": {
            content: "''",
            display: "block",
            background: props.background,
            paddingTop: "86.6%",
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          },
        }}
      />

      <svg
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </>
  )
}

export default Hexagon
