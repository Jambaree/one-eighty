import React from "react"
import { Box } from "theme-ui"

// import flexible content modules
import Form from "./flexibleContent/Form"
import Text from "./flexibleContent/Text"
import Blogteaser from "./flexibleContent/BlogTeaser"
import Hero from "./flexibleContent/Hero"
import Logos from "./flexibleContent/Logos"
import Banner from "./flexibleContent/Banner"
import Cards from "./flexibleContent/Cards"
import Introduction from "./flexibleContent/Introduction"
import Video from "./flexibleContent/Video"
import Faq from "./flexibleContent/Faq"
import TestimonialSlider from "./flexibleContent/TestimonialSlider"
import Downloads from "./flexibleContent/Downloads"

const components = {
  Form,
  Text,
  Blogteaser,
  Hero,
  Logos,
  Banner,
  Cards,
  Introduction,
  Video,
  Faq,
  TestimonialSlider,
  Downloads,
}

const FlexibleContent = (props) => {
  const { rows, data } = props

  if (!!rows) {
    return rows
      .filter((o) => !!o)
      .map(({ fieldGroupName, ...rowData }, index) => {
        if (!fieldGroupName) {
          return null
        }

        const type = fieldGroupName.split("_").slice(-1)[0]

        const Component = components[type]

        return (
          Component && (
            <Box
              key={index}
              mt={index > 0 ? [3, 5] : 0}
              mb={index < rows.length ? [3, 5] : 0}
            >
              <Component {...rowData} {...data} />
            </Box>
          )
        )
      })
  }
}

export default FlexibleContent
