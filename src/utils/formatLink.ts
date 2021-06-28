const normalizePath = (path) => {
  if (!path) {
    return ""
  }

  if (path.endsWith(`/`)) {
    path = path.slice(0, -1)
  }

  path = decodeURI(path)

  // Replace Backend URL
  path = path.replace(`${process.env.GATSBY_WP}/`, "/")

  // Replace Frontend URL
  path = path.replace(`${process.env.GATSBY_FRONTEND}/`, "/")

  return path
}

/**
 * This is temporary until we can get a path field from MenuItems https://github.com/wp-graphql/wp-graphql/issues/1137
 *
 * https://stackoverflow.com/questions/736513/how-do-i-parse-a-url-into-hostname-and-path-in-javascript
 */
const formatLink = (url) => {
  const parsedUrl = normalizePath(url)

  return parsedUrl
}

export default formatLink
