import React from "react"
import { Link } from "gatsby"
import Parser from "html-react-parser"
import { Button as ThemeButton, Spinner } from "theme-ui"

// import app components
import { formatLink } from "../utils"

const Button = ({ children, to, loading, disabled, ...rest }) => {
  // Fixes bug where front page url ('/') is returning WP url
  const formattedLink = formatLink(to)

  const element = (
    <ThemeButton
      {...rest}
      loading={loading ? 1 : 0}
      sx={{
        variant: "buttons.primary",
        position: "relative",
        cursor: "pointer",
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
    } else if (formattedLink.includes("http")) {
      return (
        <a href={formattedLink} target="_blank" rel="noreferrer">
          {element}
        </a>
      )
    } else if (
      formattedLink.includes("tel:") ||
      formattedLink.includes("mailto:")
    ) {
      return <a href={formattedLink}>{element}</a>
    } else {
      return <Link to={formattedLink}>{element}</Link>
    }
  } else {
    return element
  }
}

export default Button
