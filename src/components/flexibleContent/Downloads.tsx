import React from "react"
import { Box, Heading, Text, Link } from "theme-ui"
import { DownloadOutline, EyeOutline } from "mdi-material-ui"

// import app components
import Edges from "../Edges"

const Downloads = (props) => {
  const { downloads } = props

  return (
    <Box sx={{}}>
      <Edges size="md">
        <Box
          sx={{
            border: "1px solid",
            display: "flex",
            justifyContent: "space-between",
            p: ["4px", "10px 24px"],
          }}
        >
          <Heading>Document</Heading>
          <Heading>Download/View</Heading>
        </Box>
        {downloads &&
          downloads
            .filter((o) => !!o.file?.localFile?.publicURL)
            .map((o, i) => {
              return (
                <Box key={i}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid",
                      p: ["4px", "10px 24px 6px"],
                    }}
                  >
                    <Text children={o.file?.title} sx={{ maxWidth: "70%" }} />
                    <Box sx={{ mr: 12 }}>
                      <Link
                        href={o.file.localFile.publicURL}
                        style={{ marginRight: 18 }}
                        target="_blank"
                        rel="noopener referrer"
                        download
                      >
                        <DownloadOutline />
                      </Link>
                      <Link
                        href={o.file.localFile.publicURL}
                        target="_blank"
                        rel="noopener referrer"
                      >
                        <EyeOutline />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              )
            })}
      </Edges>
    </Box>
  )
}

export default Downloads
