import React from "react"
import { graphql } from "gatsby"
import { Box } from "theme-ui"

// import app components
import Layout from "../../../../components/Layout"
import textimage from "../../../../components/textImage/TextImage"
import hero from "../../../../components/hero/Hero"
import introduction from "../../../../components/introduction/Introduction"
import cards from "../../../../components/cards/Cards"
import textform from "../../../../components/textForm/TextForm"
import testimonialslider from "../../../../components/testimonialSlider/TestimonialSlider"
import benefits from "../../../../components/benefits/Benefits"
import logos from "../../../../components/logos/Logos"

const blocks = {
  textimage,
  hero,
  introduction,
  cards,
  textform,
  testimonialslider,
  benefits,
  logos,
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
                <Box key={index}>
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
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          width: 1920
                          tracedSVGOptions: {
                            background: "#fff"
                            color: "#E5D282"
                          }
                          placeholder: TRACED_SVG
                          layout: CONSTRAINED
                        )
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
                  backgroundcolor
                  headline
                  text
                  background {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          layout: FULL_WIDTH
                          placeholder: TRACED_SVG
                          tracedSVGOptions: {
                            color: "#E5D282"
                            background: "#FFF"
                          }
                          width: 1920
                        )
                      }
                    }
                  }
                }
                ... on WpDefaultTemplate_Acf_Content_Flex_Textimage {
                  alignment
                  fieldGroupName
                  headline
                  text
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          width: 700
                          tracedSVGOptions: {
                            background: "#fff"
                            color: "#E5D282"
                          }
                          placeholder: TRACED_SVG
                          layout: CONSTRAINED
                        )
                      }
                    }
                  }
                  link {
                    target
                    title
                    url
                  }
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
                          gatsbyImageData(
                            width: 550
                            tracedSVGOptions: {
                              background: "#fff"
                              color: "#E5D282"
                            }
                            placeholder: TRACED_SVG
                            layout: CONSTRAINED
                          )
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
                ... on WpDefaultTemplate_Acf_Content_Flex_Benefits {
                  columns
                  fieldGroupName
                  headline
                  subheading
                  cards {
                    fieldGroupName
                    headline
                    text
                    icon {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData(
                            width: 200
                            tracedSVGOptions: {
                              background: "#fff"
                              color: "#E5D282"
                            }
                            placeholder: TRACED_SVG
                            layout: CONSTRAINED
                          )
                        }
                      }
                    }
                  }
                }
                ... on WpDefaultTemplate_Acf_Content_Flex_Logos {
                  columns
                  fieldGroupName
                  headline
                  subheading
                  cards {
                    fieldGroupName
                    text
                    logo {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData(
                            width: 10
                            placeholder: TRACED_SVG
                            layout: CONSTRAINED
                            tracedSVGOptions: { background: "", color: "" }
                          )
                        }
                      }
                    }
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
