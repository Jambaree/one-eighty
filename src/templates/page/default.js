import React from "react"
import { getData, FlexibleContent } from "@jambaree/next-wordpress"
import * as blocks from "@/components/blocks"
import { notFound } from "next/navigation"

// import app components

export default async function DefaultPageTemplate({
  uri,
  isPreview,
  searchParams,
}) {
  const { page } = await getData({
    variables: { uri },
    query,
    isPreview,
    searchParams,
  })

  if (!page) {
    notFound()
  }
  const {
    title,
    template: {
      acf: {
        content: { flex },
      },
    },
  } = page

  return (
    <>
      <FlexibleContent blocks={blocks} rows={flex} data={{ title, uri }} />
    </>
  )
}

const query = /* GraphQL */ `
  query DefaultPage($uri: ID!) {
    page(id: $uri, idType: URI) {
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
        ... on DefaultTemplate {
          templateName
          acf {
            content {
              flex {
                __typename
                ... on DefaultTemplate_Acf_Content_Flex_Hero {
                  fieldGroupName
                  headline
                  filevideo {
                    altText
                    mediaItemUrl
                  }
                  image {
                    altText
                    sourceUrl
                  }
                }

                ... on DefaultTemplate_Acf_Content_Flex_Quote {
                  fieldGroupName
                  backgroundcolor
                  width
                  text
                  mb
                }
                ... on DefaultTemplate_Acf_Content_Flex_Content {
                  fieldGroupName
                  backgroundcolor
                  text
                  sections {
                    fieldGroupName
                    sectorname
                    projects
                    image {
                      altText

                      sourceUrl
                    }
                  }
                }
                ... on DefaultTemplate_Acf_Content_Flex_Text {
                  fieldGroupName
                  text
                  lightdark
                  extrapadding
                  fade
                  buttons {
                    fieldGroupName
                    link {
                      target
                      title
                      url
                    }
                  }
                }

                ... on DefaultTemplate_Acf_Content_Flex_Textimage {
                  fieldGroupName
                  headline
                  image {
                    altText
                    sourceUrl
                  }
                }
                ... on DefaultTemplate_Acf_Content_Flex_Tiles {
                  fieldGroupName
                  headline
                  style
                  cards {
                    fieldGroupName
                    text
                    image {
                      altText

                      sourceUrl
                    }
                  }
                }
                ... on DefaultTemplate_Acf_Content_Flex_Testimonialslider {
                  fieldGroupName
                  image {
                    altText
                    sourceUrl
                  }
                  slide {
                    fieldGroupName
                    quote
                    name
                    companyname
                    companyname2
                  }
                }
                ... on DefaultTemplate_Acf_Content_Flex_Quoteslider {
                  fieldGroupName
                  image {
                    altText
                    sourceUrl
                  }
                  slide {
                    quote
                    title
                  }
                }

                ... on DefaultTemplate_Acf_Content_Flex_Logos {
                  fieldGroupName
                  columns
                  headline
                  cards {
                    fieldGroupName
                    text
                    url
                    logo {
                      altText

                      sourceUrl
                    }
                  }
                }

                ... on DefaultTemplate_Acf_Content_Flex_Carousel {
                  fieldGroupName
                  headline
                  cards {
                    fieldGroupName
                    heading
                    subheading
                    text
                    image {
                      sourceUrl
                      altText
                    }
                  }
                }

                ... on DefaultTemplate_Acf_Content_Flex_Banner {
                  fieldGroupName
                  gradient
                  mt
                  backgroundimage {
                    altText
                    sourceUrl
                  }
                }
                ... on DefaultTemplate_Acf_Content_Flex_Contact {
                  fieldGroupName
                  headline
                  address
                  phoneone
                  instagram
                  facebook
                  linkedin
                  twitter
                  youtube
                  email
                  image {
                    altText
                    sourceUrl
                  }
                }
                ... on DefaultTemplate_Acf_Content_Flex_Tool {
                  fieldGroupName
                  headline
                  text
                  image {
                    altText

                    sourceUrl
                  }
                }
                ... on DefaultTemplate_Acf_Content_Flex_Numlist {
                  fieldGroupName
                  text
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
