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
import logos from "../../../../components/logos/Logos"
import partners from "../../../../components/partners/Partners"
import cardcarousel from "../../../../components/cardCarousel/CardCarousel"
import textimagepage from "../../../../components/textImagePage/TextImagePage"
import herovideo from "../../../../components/heroVideo/HeroVideo"
import banner from "../../../../components/banner/Banner"
import addresses from "../../../../components/addresses/Addresses"
import topbanner from "../../../../components/topBanner/TopBanner"
import quote from "../../../../components/quote/Quote"
import text from "../../../../components/text/Text"

const blocks = {
  textimage,
  hero,
  introduction,
  cards,
  testimonialslider,
  logos,
  partners,
  cardcarousel,
  textimagepage,
  herovideo,
  banner,
  addresses,
  topbanner,
  quote,
  text,
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
                ... on WpDefaultTemplate_Acf_Content_Flex_Introduction {
                  fieldGroupName
                  backgroundcolor
                  headline
                  text
                }
                ... on WpDefaultTemplate_Acf_Content_Flex_Quote {
                  fieldGroupName
                  backgroundcolor
                  text
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
                ... on WpDefaultTemplate_Acf_Content_Flex_Cards {
                  fieldGroupName
                  columns
                  headline
                  headlinestyle
                  subheading
                  mainbutton {
                    target
                    title
                    url
                  }
                  cards {
                    fieldGroupName
                    headline
                    text
                    link {
                      target
                      title
                      url
                    }
                    image {
                      altText
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
                    quote
                  }
                }
                ... on WpDefaultTemplate_Acf_Content_Flex_Topbanner {
                  fieldGroupName
                  headline
                  text
                  color
                  bannerbackground
                }
                ... on WpDefaultTemplate_Acf_Content_Flex_Logos {
                  fieldGroupName
                  columns
                  headline
                  subheading
                  cards {
                    imagetype
                    fieldGroupName
                    text
                    logo {
                      svg
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData(
                            width: 244
                            placeholder: BLURRED
                            quality: 100
                          )
                        }
                      }
                    }
                    modal {
                      fieldGroupName
                      modaltext
                      modallink {
                        target
                        title
                        url
                      }
                      modalimage {
                        altText
                        localFile {
                          childImageSharp {
                            gatsbyImageData(
                              width: 244
                              placeholder: BLURRED
                              quality: 100
                            )
                          }
                        }
                      }
                    }
                  }
                }

                ... on WpDefaultTemplate_Acf_Content_Flex_Partners {
                  fieldGroupName
                  backgroundcolor
                  columns
                  headline
                  subheading
                  mainbutton {
                    target
                    title
                    url
                  }
                  cards {
                    fieldGroupName
                    link {
                      target
                      title
                      url
                    }
                    icon {
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
                ... on WpDefaultTemplate_Acf_Content_Flex_Cardcarousel {
                  fieldGroupName
                  headline
                  headlinestyle
                  subheading
                  cards {
                    fieldGroupName
                    heading
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
                    defaultimage {
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
                ... on WpDefaultTemplate_Acf_Content_Flex_Textimagepage {
                  fieldGroupName
                  mainheadline
                  subheading
                  mainlink {
                    target
                    title
                    url
                  }
                  textimage {
                    fieldGroupName
                    alignment
                    headline
                    text
                    link {
                      target
                      title
                      url
                    }
                    image {
                      svg
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData(
                            width: 250
                            placeholder: BLURRED
                            quality: 100
                          )
                        }
                      }
                    }
                  }
                }

                ... on WpDefaultTemplate_Acf_Content_Flex_Herovideo {
                  fieldGroupName
                  headline
                  headlinestyle
                  subheading
                  videoalignment
                  videolink
                }
                ... on WpDefaultTemplate_Acf_Content_Flex_Banner {
                  fieldGroupName
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
                ... on WpDefaultTemplate_Acf_Content_Flex_Addresses {
                  fieldGroupName
                  columns
                  backgroundcolor
                  address {
                    fieldGroupName
                    contactinfo
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
