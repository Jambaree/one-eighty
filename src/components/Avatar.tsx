import React, { useState } from "react"
import { navigate } from "gatsby"
import { Menu, MenuItem } from "@material-ui/core"

// import app components
import { logoutUser } from "../auth"

const Avatar = (props) => {
  const { user, dispatch } = props

  const [anchorEl, setAnchorEl] = useState(null)

  if (user) {
    return (
      <>
        {user?.avatar?.url && (
          <img
            onClick={(event) => {
              setAnchorEl(event.currentTarget)
            }}
            src={user?.avatar?.url}
            sx={{
              borderRadius: "100%",
              height: "30px",
              width: "30px",
              cursor: "pointer",
            }}
          />
        )}

        <Menu
          // anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem
            onClick={() => {
              navigate("/account/settings")
              setAnchorEl(null)
            }}
          >
            Account
          </MenuItem>
          <MenuItem
            onClick={() => {
              logoutUser(dispatch)
              setAnchorEl(null)
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </>
    )
  } else {
    return null
  }
}

export default Avatar
