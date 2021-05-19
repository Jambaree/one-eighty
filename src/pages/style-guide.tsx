import React from "react"
import { Themed } from "theme-ui"
import { TypeScale, TypeStyle, ColorPalette } from "@theme-ui/style-guide"

import Edges from "../components/Edges"

export default (props) => (
  <Edges size="md">
    <Themed.h1>Style Guide</Themed.h1>
    <ColorPalette />
    <TypeScale />
    <TypeStyle fontFamily="heading" fontWeight="heading" lineHeight="heading" />
    <TypeStyle fontFamily="body" fontWeight="body" lineHeight="body" />
  </Edges>
)
