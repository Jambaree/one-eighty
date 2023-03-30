"use client"
import React from "react"
import Link from "next/link"
import Parser from "html-react-parser"
import { Button as ThemeButton, Spinner } from "theme-ui"

// import app components

const Button = ({
  children,
  to,
  loading,
  disabled,
  customeVariant,
  ...rest
}) => {
  const element = (
    <ThemeButton
      {...rest}
      sx={{
        variant: `${customeVariant ? customeVariant : "buttons.primary"}`,
        position: "relative",
        cursor: "pointer",
        textAlign: "center",
        minWidth: "270px",
        height: "52px",
        py: "10px",
        ".btn-loader": {
          position: "absolute",
          opacity: 0,
          zIndex: 1,
          pointerEvents: "none",
          left: "calc(50% - 12.5px)",
        },
        ".btn-children": {
          opacity: loading && 0,
        },
        " .btn-loader ": {
          opacity: loading && 1,
        },
      }}
      disabled={disabled}
    >
      <Spinner className="btn-loader" size={25} />
      <span className="btn-children">{Parser(children)}</span>
    </ThemeButton>
  )

  if (to) {
    if (disabled) {
      return element
    } else if (to.includes("http")) {
      return (
        <a href={to} target="_blank" rel="noreferrer">
          {element}
        </a>
      )
    } else if (to.includes("tel:") || to.includes("mailto:")) {
      return <a href={to}>{element}</a>
    } else {
      return <Link href={to}>{element}</Link>
    }
  } else {
    return element
  }
}

export default Button
