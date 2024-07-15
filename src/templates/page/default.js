import React from "react"
import { FlexibleContent } from "@nextwp/core"
import * as blocks from "@/components/blocks"

// import app components

export function DefaultPageTemplate(props) {
  const {
    data: {
      title,

      acf: { modules },
    },
  } = props

  return (
    <>
      <FlexibleContent blocks={blocks} rows={modules} />
    </>
  )
}
