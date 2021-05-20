import React from "react"
import { graphql } from "gatsby"
import { Box } from "theme-ui"

// import app components
import Layout from "../../../../components/Layout"
import textimage from "../../../../components/textImage/TextImage"
import hero from "../../../../components/hero/Hero"
import introduction from "../../../../components/introduction/Introduction"
import cards from "../../../../components/cards/Cards"
import testimonialslider from "../../../../components/testimonialSlider/TestimonialSlider"
import benefits from "../../../../components/benefits/Benefits"

const blocks = {
  textimage,
  hero,
  introduction,
  cards,
  testimonialslider,
  benefits,
}

const Template = (props) => {
  const {
    data: {
      wpPage: {
        template: { acf },
      },
    },
  } = props

  return (
    <Layout {...props}>
      {acf?.content?.flex &&
        acf.content.flex.map(
          ({ id: fieldId, fieldGroupName, ...rest }, index) => {
            const id = fieldId || fieldGroupName?.split("_").pop().toLowerCase()

            const Component = blocks?.[id]
            return (
              Component && (
                <Box
                  key={index}
                  mt={index === 0 ? "94px" : [3, 5]}
                  mb={index < acf.content.flex.length ? [3, 5] : 0}
                >
                  <Component {...rest} />
                </Box>
              )
            )
          }
        )}
    </Layout>
  )
}

export const CollectionQuery = graphql`
  query DefaultPage($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      slug
      uri
      template {
        ... on WpDefaultTemplate {
          templateName
          acf {
            content {
              flex {
                ... on WpDefaultTemplate_Acf_Content_Flex_Hero {
                  fieldGroupName
                  headline
                  image {
                    id
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                  link {
                    target
                    title
                    url
                  }
                  text
                }
                ... on WpDefaultTemplate_Acf_Content_Flex_Introduction {
                  fieldGroupName
                  headline
                  text
                }
                ... on WpDefaultTemplate_Acf_Content_Flex_Textimage {
                  alignment
                  fieldGroupName
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                  text
                }
                ... on WpDefaultTemplate_Acf_Content_Flex_Cards {
                  fieldGroupName
                  headline
                  cards {
                    fieldGroupName
                    headline
                    image {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                    link {
                      target
                      title
                      url
                    }
                    text
                  }
                  subheading
                }
                ... on WpDefaultTemplate_Acf_Content_Flex_Testimonialslider {
                  fieldGroupName
                  backgroundcolor
                  headline
                  subheading
                  slide {
                    fieldGroupName
                    name
                    position
                    quote
                  }
                }
              }
            }
            fieldGroupName
          }
        }
      }
    }
  }
`

export default Template
