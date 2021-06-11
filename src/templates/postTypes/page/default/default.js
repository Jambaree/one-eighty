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
import partners from "../../../../components/partners/Partners"
import cardcarousel from "../../../../components/cardCarousel/CardCarousel"
import locations from "../../../../components/accordion/Accordion"
import textimagepage from "../../../../components/textImagePage/TextImagePage"
import herovideo from "../../../../components/heroVideo/HeroVideo"
import banner from "../../../../components/banner/Banner"
import addresses from "../../../../components/addresses/Addresses"

const blocks = {
  textimage,
  hero,
  introduction,
  cards,
  textform,
  testimonialslider,
  benefits,
  logos,
  partners,
  cardcarousel,
  locations,
  textimagepage,
  herovideo,
  banner,
  addresses,
}

const Template = (props) => {
  const {
    data: {
      page: {
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
    page: wpPage(id: { eq: $id }) {
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
                  text
                  linktype
                  link {
                    target
                    title
                    url
                  }
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(width: 1920, placeholder: BLURRED)
                      }
                    }
                  }
                  mobileimage {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(width: 375, placeholder: BLURRED)
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
                ... on WpDefaultTemplate_Acf_Content_Flex_Textimage {
                  fieldGroupName
                  backgroundcolor
                  alignment
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
                        gatsbyImageData(width: 700, placeholder: BLURRED)
                      }
                    }
                  }
                }
                ... on WpDefaultTemplate_Acf_Content_Flex_Cards {
                  fieldGroupName
                  columns
                  headline
                  subheading
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
                          gatsbyImageData(width: 550, placeholder: BLURRED)
                        }
                      }
                    }
                  }
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
                  fieldGroupName
                  columns
                  headline
                  subheading
                  link {
                    target
                    title
                    url
                  }
                  cards {
                    fieldGroupName
                    headline
                    text
                    icon {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData(width: 200, placeholder: BLURRED)
                        }
                      }
                    }
                  }
                }
                ... on WpDefaultTemplate_Acf_Content_Flex_Logos {
                  fieldGroupName
                  columns
                  headline
                  subheading
                  cards {
                    fieldGroupName
                    text
                    logo {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData(width: 244, placeholder: BLURRED)
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
                            gatsbyImageData(width: 244, placeholder: BLURRED)
                          }
                        }
                      }
                    }
                  }
                }
                ... on WpDefaultTemplate_Acf_Content_Flex_Textform {
                  fieldGroupName
                  alignment
                  formbackground
                  formid
                  headline
                  text
                  disclaimer
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
                          gatsbyImageData(width: 350, placeholder: BLURRED)
                        }
                      }
                    }
                  }
                }
                ... on WpDefaultTemplate_Acf_Content_Flex_Cardcarousel {
                  fieldGroupName
                  headline
                  subheading
                  cards {
                    fieldGroupName
                    heading
                    text
                    image {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData(width: 350, placeholder: BLURRED)
                        }
                      }
                    }
                    defaultimage {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData(width: 350, placeholder: BLURRED)
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
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData(width: 250, placeholder: BLURRED)
                        }
                      }
                    }
                  }
                }
                ... on WpDefaultTemplate_Acf_Content_Flex_Locations {
                  fieldGroupName
                  location {
                    fieldGroupName
                    mainheading
                    address {
                      fieldGroupName
                      addressheading
                      addresslineone
                      addresslinetwo
                      phoneone
                      phonetwo
                      email
                    }
                  }
                }
                ... on WpDefaultTemplate_Acf_Content_Flex_Herovideo {
                  fieldGroupName
                  headline
                  subheading
                  videoalignment
                  videolink
                }
                ... on WpDefaultTemplate_Acf_Content_Flex_Banner {
                  fieldGroupName
                  headline
                  text
                  backgroundimage {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(width: 1920, layout: FULL_WIDTH)
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
