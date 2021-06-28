import React, { useState, useEffect } from "react"
import { Grid, Box, Themed, Input } from "theme-ui"
import axios from "axios"

// import app components <- add this line to distinguish between npm packages and custom components
import Post from "./components/Post"
import Button from "./components/Button"
import { useStore } from "./store"

// Use named const to define component and export default at the very bottom
const Example = (props) => {
  // #1 Destructure props passed in from parent component
  const { category, onDelete } = props

  // #2 Get props from store if necessary
  const [
    {
      appState: { search },
    },
    dispatch,
  ] = useStore()

  // #3 Define states. Initialise with null if data needs to be fetched first.
  const [posts, setPosts] = useState(null)

  // #4 Do something with props / state if necessary
  const postsBySearch = posts && posts.filter((o) => o.title.includes(search))

  // #5 useEffects
  useEffect(() => {
    // If the functions in only executed in one place, let's move it into useEffect
    const fetchPosts = async () => {
      const result = await axios.get(`https://example.com/posts/${category}`)

      // Always add (nested) checks to make sure the response is valid
      if (result?.posts) {
        setPosts(result.posts)
      }
    }

    fetchPosts()
  }, [])

  // Functions

  // Click functions always start with 'handle'
  const handleDelete = (id) => {
    // Do something...

    // Callbacks always start with 'on'
    onDelete()
  }

  return (
    <Box pt={3} pb={3}>
      {/* As long as there is just one command we can use inline functions. Otherwise create a 'handle' function. */}
      <Input
        value={search}
        onChange={(e) =>
          dispatch({ type: "SET_SEARCH", payload: e.target.value })
        }
      />

      <Grid>
        {postsBySearch &&
          postsBySearch.map((o, index) => {
            return (
              <Post key={o.id} to={o.url}>
                {/* Don't forget the key and make sure it's unique (use index if necessary) */}

                {/* I like to use the children property because I can save 2 lines of code.
                But I only do it when there is a single children element */}
                <Themed.h1 children={o.title} tag={o.tag} />

                <Button onClick={() => handleDelete(o.id)} children="Delete" />
              </Post>
            )
          })}
      </Grid>
    </Box>
  )
}

export default Example
