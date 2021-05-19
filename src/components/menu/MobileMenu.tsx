import React, { useState } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/css"
import { Link } from "gatsby"
import Parser from "html-react-parser"

// import app components
import ChevronDown from "../../icons/chevron-down.svg"
import { useStore } from "../../store"
import useMenuItems from "./useMenuItems"
import { formatLink } from "../../utils"
import theme from "../../theme"

interface Props {
  items?: [any]
}

const MobileMenu: React.FC<Props> = (props: Props) => {
  const [
    {
      appState: { menu },
    },
    dispatch,
  ] = useStore()

  const { items } = props

  console.log({ items })

  const [activeItems, setActiveItems] = useState([])

  const handleArrowClick = (id) => {
    let newItems = [...activeItems]

    if (activeItems.includes(id)) {
      newItems = newItems.filter((i) => i !== id)
    } else {
      newItems.push(id)
    }

    setActiveItems(newItems)
  }

  const handleCloseMenu = () => dispatch({ type: "SET_MENU", payload: false })

  return (
    <>
      <Menu {...props} menuState={menu}>
        {items &&
          items.map(({ key: id, url, title, children }) => {
            return (
              <MenuItem key={id}>
                {children?.length ? (
                  <>
                    {url === "#" ? (
                      <MenuLinkContainer onClick={() => handleArrowClick(id)}>
                        {title && Parser(title)}
                        <ChevronContainer>
                          <ChevronDown />
                        </ChevronContainer>
                      </MenuLinkContainer>
                    ) : (
                      <MenuLinkContainer>
                        <MenuLink
                          to={formatLink(url)}
                          activeStyle={{ color: theme.colors.primary }}
                          onClick={handleCloseMenu}
                        >
                          {Parser(title)}
                        </MenuLink>
                        <ChevronContainer onClick={() => handleArrowClick(id)}>
                          <ChevronDown />
                        </ChevronContainer>
                      </MenuLinkContainer>
                    )}

                    <SubMenu
                      className={`sub-menu`}
                      active={activeItems.includes(id)}
                    >
                      {children.map((o, i) => {
                        return (
                          <SubMenuLink
                            key={i}
                            to={formatLink(o.url)}
                            activeClassName="active"
                            onClick={handleCloseMenu}
                          >
                            {o?.title && Parser(o.title)}
                          </SubMenuLink>
                        )
                      })}
                    </SubMenu>
                  </>
                ) : (
                  <MenuLink
                    to={formatLink(url)}
                    onClick={handleCloseMenu}
                    activeStyle={{ color: "red" }}
                  >
                    {title && Parser(title)}
                  </MenuLink>
                )}
              </MenuItem>
            )
          })}
      </Menu>

      <Gradient
        onClick={() => dispatch({ type: "SET_MENU", payload: false })}
        menuState={menu}
      />
    </>
  )
}

const Menu = styled.div`
  ${(props) =>
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
  top: 0;
  height: 100%;
  width: 100%;
  right: 0;
  max-width: 250px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  background: #fff;
  padding-top: 100px;
  padding-bottom: 40px;
  overflow-y: auto;

  @media (min-width: 960px) {
    display: none;
  }
`

const ChevronContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 12px;
`

const item = css`
  position: relative;
  color: ${theme.colors.primary};
  text-decoration: none;
  width: 100%;
`

const MenuLinkContainer = styled.div`
  ${item}
  display: flex;
  justify-content: space-between;
`

const MenuItem = styled.div`
  padding: 10px 10px 10px 20px;
  ${item}
`

const MenuLink = styled(Link)`
  ${item}
`

const SubMenu = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
`

const SubMenuLink = styled(Link)`
  display: block;
  padding: 4px 0;
  color: ${theme.colors.secondary};
`

const Gradient = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 90;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (!!props.menuState ? 1 : 0)};
  pointer-events: ${(props) => (!!props.menuState ? "all" : "none")};
  transition: ease all 0.2s;
`

export default MobileMenu
