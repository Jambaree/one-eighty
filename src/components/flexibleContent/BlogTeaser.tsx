import React from "react"
import { Grid, Heading } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"

// import app components
import Post from "../Post"
import Edges from "../Edges"

const BlogTeaser = () => {
  // const { nodes } = usePostQuery()

  // const posts = nodes && nodes.slice(0, 2)

  return (
    <Edges size="md">
      <Heading mb={3}>Latest Posts</Heading>
      <Grid gap={2} columns={[1, 2]}>
        {/* {posts &&
          posts.map((o) => {
            return (
              <Post
                key={o.id}
                image={o.acf.image}
                headline={o.title}
                url={o.uri}
              />
            )
          })} */}
      </Grid>
    </Edges>
  )
}

// const usePostQuery = () => {
//   const { allWpPost } = useStaticQuery(
//     graphql`
//       query {
//         allWpPost {
//           nodes {
//             id
//             title
//             uri
//             date
//             acf {
//               text
//               image {
//                 altText
//                 localFile {
//                   childImageSharp {
//                     gatsbyImageData(width: 600)
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `
//   )
//   return allWpPost
// }

export default BlogTeaser
