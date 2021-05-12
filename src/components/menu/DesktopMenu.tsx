import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Parser from "html-react-parser"
import { Box } from "theme-ui"

// import app components
import useMenuItems from "./useMenuItems"
import theme from "../../theme"
import { formatLink } from "../../utils"
import ChevronDown from "../../icons/chevron-down.svg"

const DesktopMenu = (props) => {
  const items = useMenuItems("desktop-main-menu")

  return (
    <Menu {...props}>
      {items &&
        items.map(({ id, url, label, childItems }) => (
          <MenuItem key={id}>
            <Box>
              {childItems && childItems.nodes.length ? (
                <>
                  {url === "#" ? (
                    <MenuLinkContainer>
                      {Parser(label)}
                      <ChevronDown />
                    </MenuLinkContainer>
                  ) : (
                    <MenuLink
                      to={formatLink(url)}
                      activeStyle={{ color: theme.colors.primary }}
                    >
                      {Parser(label)}

                      <ChevronDown />
                    </MenuLink>
                  )}

                  <SubMenu className="sub-menu">
                    {childItems.nodes.map((o, i) => (
                      <SubMenuItem
                        key={i}
                        to={formatLink(o.url)}
                        activeClassName="active"
                      >
                        {Parser(o.label)}
                      </SubMenuItem>
                    ))}
                  </SubMenu>
                </>
              ) : (
                <MenuLink
                  to={formatLink(url)}
                  activeStyle={{ color: theme.colors.primary }}
                >
                  {Parser(label)}
                </MenuLink>
              )}
            </Box>
          </MenuItem>
        ))}
    </Menu>
  )
}

const Menu = styled.div`
  display: flex;
  a {
    text-decoration: none;
  }
`
const MenuItem = styled.div`
  display: flex;
  position: relative;

  &:hover {
    .sub-menu {
      opacity: 1;
      pointer-events: all;
    }
  }
  .sub-menu {
    opacity: 0;
    pointer-events: none;
  }
`

const MenuLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  margin-left: 20px;
  color: ${theme.colors.text};

  &:hover {
    color: ${theme.colors.primary};
  }
`

const SubMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 100%;
  left: calc(50% + 15px);
  transform: translateX(-50%);
  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.primary};

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -8px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid ${theme.colors.primary};
  }
`

const SubMenuItem = styled(Link)`
  padding: 15px 30px;
  flex-shrink: 0;
  white-space: nowrap;
  color: ${theme.colors.text};

  &:hover,
  &.active {
    background: ${theme.colors.primary};
    color: #fff;
  }
`

const MenuLinkContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 10px;
  margin-left: 20px;
  color: #fff;
  cursor: pointer;

  svg {
    margin-left: 5px;
  }
`

export default DesktopMenu
