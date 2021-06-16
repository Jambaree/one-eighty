import React from "react"
import { graphql, Link } from "gatsby"
import moment from "moment"
import { Grid, Box, Heading, Text } from "theme-ui"

// import app components
import Layout from "../../../../components/Layout"
import Edges from "../../../../components/Edges"
import TopBanner from "../../../../components/topBanner/TopBanner"
import TextEditor from "../../../../components/textEditor/TextEditor"
import theme from "../../../../theme"

const Template = (props) => {
  const {
    data: {
      wpPost: { title, date, acf, seo },
    },
  } = props

  return (
    <Layout {...props} seo={seo}>
      <TopBanner headline={title} />

      <Box sx={{ bg: "almondLight" }}>
        <Edges size="sm">
          <Grid
            columns={[null, null, "2fr 10fr"]}
            gap={["28px", 3, 3]}
            sx={{
              pt: [40, 100],
              pb: [60, 160],
              m: ["0 auto", "unset", "unset"],
            }}
          >
            <Box>
              <Text
                sx={{
                  fontFamily: "fonts.body",
                  textTransform: "uppercase",
                  color: "plumLight",
                  letterSpacing: "1.1px",
                  fontSize: "11px",
                }}
              >
                {moment(date).format("DD MMM")}
              </Text>
            </Box>
            <Box>
              <Heading variant="styles.h5" sx={{ fontSize: "6", mb: 18 }}>
                {title}
              </Heading>

              {acf?.text && <TextEditor {...acf.text} />}

              <Box sx={{ mt: 50 }} variant="links.hyperlink">
                <Link
                  to={"/press-room"}
                  style={{
                    letterSpacing: "-0.23px",
                    lineHeight: "25px",
                    color: theme.colors.coral,
                  }}
                >
                  Back to Posts →
                </Link>
              </Box>
            </Box>
          </Grid>
        </Edges>
      </Box>
    </Layout>
  )
}

export const Query = graphql`
  query PostDefault($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      categories {
        nodes {
          databaseId
          name
          uri
        }
      }
      seo {
        title
        metaDesc
        opengraphImage {
          sourceUrl
        }
      }
      acf {
        text {
          fieldGroupName
          flex {
            ... on WpPost_Acf_Text_Flex_Text {
              fieldGroupName
              text
            }
            ... on WpPost_Acf_Text_Flex_Embed {
              fieldGroupName
              url
            }
          }
        }
      }
    }
  }
`

export default Template
