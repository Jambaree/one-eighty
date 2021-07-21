import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/css"
import { Link } from "gatsby"
import Parser from "html-react-parser"
import { Text } from "theme-ui"

// import app components
import { useStore } from "../../store"
import { formatLink } from "../../utils"
import theme from "../../theme"

interface Props {
  items?: [any]
}

const MobileMenu: React.FC<Props> = (props: Props) => {
  const { items } = props

  const [
    {
      appState: { menu },
    },
    dispatch,
  ] = useStore()

  const handleCloseMenu = () => dispatch({ type: "SET_MENU", payload: false })

  return (
    <>
      <Menu {...props} menuState={menu}>
        {items &&
          items.map(({ key: id, url, title, children }) => {
            return (
              <MenuItem key={id}>
                <MenuLink
                  to={formatLink(url)}
                  onClick={handleCloseMenu}
                  activeClassName="active"
                  activeStyle={{ color: "red" }}
                >
                  <Text variant="text.primaryNav">
                    {title && Parser(title)}
                  </Text>
                </MenuLink>
              </MenuItem>
            )
          })}
      </Menu>
    </>
  )
}

const Menu = styled.div`
  ${(props: any) =>
    props.menuState
      ? `
          transform: translateX(0);
          opacity: 1;
        `
      : `
          transform: translateX(120%);
          opacity: 0;
        `};

  position: fixed;
  top: ${theme.headerHeight};
  width: 100%;
  height: calc(100vh - 60px);
  right: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  background: ${theme.colors.blue180};
  padding-top: 32px;
  padding-bottom: 32px;
  overflow-y: auto;

  @media (min-width: 1024px) {
    display: none;
  }
`

const item = css`
  position: relative;
  color: #fff;
  text-decoration: none;
  width: 100%;
`

const MenuItem = styled.div`
  padding: 0 30px;
  margin-bottom: 40px;
  ${item};
  color: #fff;
`

const MenuLink = styled(Link)`
  ${item};
  color: #fff;
  /* &.active {
    color: ${theme.colors.red};
  } */
  &:hover {
    color: ${theme.colors.termsPrivacy};
  }
`

export default MobileMenu
