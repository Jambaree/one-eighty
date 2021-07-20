import React from "react"
import { graphql } from "gatsby"
import { Box } from "theme-ui"

// import app components
import Layout from "../../../../components/Layout"
import textimage from "../../../../components/textImage/TextImage"
import hero from "../../../../components/hero/Hero"
import tiles from "../../../../components/tiles/Tiles"
import testimonialslider from "../../../../components/testimonialSlider/TestimonialSlider"
import logos from "../../../../components/logos/Logos"
import carousel from "../../../../components/carousel/Carousel"
import banner from "../../../../components/banner/Banner"
import quote from "../../../../components/quote/Quote"
import text from "../../../../components/text/Text"
import content from "../../../../components/content/Content"
import quoteslider from "../../../../components/quoteSlider/QuoteSlider"
import contact from "../../../../components/contact/Contact"

const blocks = {
  textimage,
  hero,
  tiles,
  testimonialslider,
  logos,
  carousel,
  banner,
  quote,
  text,
  content,
  quoteslider,
  contact,
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
      seo {
        title
        metaDesc
        opengraphImage {
          sourceUrl
        }
      }
      template {
        ... on WpDefaultTemplate {
          templateName
          acf {
            content {
              flex {
                ... on WpDefaultTemplate_Acf_Content_Flex_Hero {
                  fieldGroupName
                  headline
                  filevideo {
                    altText
                    localFile {
                      publicURL
                    }
                  }
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          width: 1920
                          placeholder: BLURRED
                          quality: 100
                        )
                      }
                    }
                  }
                }

                ... on WpDefaultTemplate_Acf_Content_Flex_Quote {
                  fieldGroupName
                  backgroundcolor
                  text
                }
                ... on WpDefaultTemplate_Acf_Content_Flex_Content {
                  fieldGroupName
                  backgroundcolor
                  text
                  image {
                    altText
                    svg
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          width: 1920
                          placeholder: BLURRED
                          quality: 100
                        )
                      }
                    }
                  }
                }
                ... on WpDefaultTemplate_Acf_Content_Flex_Text {
                  fieldGroupName
                  text
                }

                ... on WpDefaultTemplate_Acf_Content_Flex_Textimage {
                  fieldGroupName
                  headline
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          width: 600
                          placeholder: BLURRED
                          quality: 100
                        )
                      }
                    }
                  }
                }
                ... on WpDefaultTemplate_Acf_Content_Flex_Tiles {
                  fieldGroupName
                  headline
                  style
                  cards {
                    fieldGroupName
                    text
                    image {
                      altText
                      svg
                      localFile {
                        childImageSharp {
                          gatsbyImageData(
                            width: 55
                            placeholder: BLURRED
                            quality: 100
                          )
                        }
                      }
                    }
                  }
                }
                ... on WpDefaultTemplate_Acf_Content_Flex_Testimonialslider {
                  fieldGroupName
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          width: 1920
                          placeholder: BLURRED
                          quality: 100
                        )
                      }
                    }
                  }
                  slide {
                    fieldGroupName
                    quote
                    name
                    companyname
                  }
                }
                ... on WpDefaultTemplate_Acf_Content_Flex_Quoteslider {
                  fieldGroupName
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          width: 1920
                          placeholder: BLURRED
                          quality: 100
                        )
                      }
                    }
                  }
                  slide {
                    quote
                    title
                  }
                }

                ... on WpDefaultTemplate_Acf_Content_Flex_Logos {
                  fieldGroupName
                  columns
                  headline
                  cards {
                    fieldGroupName
                    text
                    url
                    logo {
                      altText
                      svg
                      localFile {
                        childImageSharp {
                          gatsbyImageData(
                            width: 550
                            placeholder: BLURRED
                            quality: 100
                          )
                        }
                      }
                    }
                  }
                }

                ... on WpDefaultTemplate_Acf_Content_Flex_Carousel {
                  fieldGroupName
                  headline
                  cards {
                    fieldGroupName
                    heading
                    subheading
                    text
                    image {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData(
                            width: 350
                            placeholder: BLURRED
                            quality: 100
                          )
                        }
                      }
                    }
                  }
                }

                ... on WpDefaultTemplate_Acf_Content_Flex_Banner {
                  fieldGroupName
                  gradient
                  backgroundimage {
                    altText
                    sourceUrl
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          width: 1920
                          layout: FULL_WIDTH
                          quality: 100
                        )
                      }
                    }
                  }
                }
                ... on WpDefaultTemplate_Acf_Content_Flex_Contact {
                  fieldGroupName
                  headline
                  address
                  phoneone
                  phonetwo
                  email
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          layout: FULL_WIDTH
                          placeholder: BLURRED
                          quality: 100
                          width: 1920
                        )
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
