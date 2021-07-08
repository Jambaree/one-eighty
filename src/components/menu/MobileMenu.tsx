import React, { useState } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/css"
import { Link } from "gatsby"
import Parser from "html-react-parser"
import { Text, Flex } from "theme-ui"

// import app components
// import ChevronDown from "../../icons/chevron-down.svg"
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

  const itemIds = items ? items.map(({ key }) => key) : [] // set all items open by default

  const [activeItems, setActiveItems] = useState([...itemIds])

  const handleArrowClick = (id: any) => {
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
                        <Text variant="text.primaryNav" color="inherit">
                          {title && Parser(title)}
                        </Text>

                        <Chevron active={activeItems.includes(id)} />
                      </MenuLinkContainer>
                    ) : (
                      <MenuLinkContainer>
                        <MenuLink
                          to={formatLink(url)}
                          activeStyle={{}}
                          onClick={handleCloseMenu}
                        >
                          <Text variant="text.primaryNav" color="inherit">
                            {title && Parser(title)}
                          </Text>
                        </MenuLink>

                        <Chevron
                          active={activeItems.includes(id)}
                          onClick={() => handleArrowClick(id)}
                        />
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
                            activeStyle={{}}
                          >
                            <Text variant="text.primaryNav" color="inherit">
                              {o?.title && Parser(o.title)}
                            </Text>
                          </SubMenuLink>
                        )
                      })}
                    </SubMenu>
                  </>
                ) : (
                  <MenuLink
                    to={formatLink(url)}
                    onClick={handleCloseMenu}
                    activeStyle={{}}
                  >
                    <Text color="inherit" variant="text.primaryNav">
                      {title && Parser(title)}
                    </Text>
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

const Chevron = (props) => {
  const { active, onClick } = props

  return (
    <Flex
      onClick={onClick}
      sx={{
        alignItems: "center",
        padding: "0 12px",
        cursor: "pointer",

        ".chevron-icon": {
          color: "#fff",
          transition: "transform 150ms ease-in-out",
          transform: active ? "rotate(-180deg)" : "rotate(0)",
        },
      }}
    >
      {/* <ChevronDown className="chevron-icon" /> */}
    </Flex>
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
  height: 100vh;
  right: 0;
  z-index: -2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  background: ${theme.colors.blue180};
  padding-top: 32px;
  padding-bottom: 32px;
  max-height: calc(100vh - 60px);
  overflow-y: auto;

  @media (min-width: 1024px) {
    display: none;
  }
`

const ChevronContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
`

const item = css`
  position: relative;
  color: #fff;
  text-decoration: none;
  width: 100%;
`

const MenuLinkContainer = styled.div`
  display: flex;
  cursor: pointer;
  ${item};
  color: #fff;
  margin-bottom: 10px;
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
  &:hover {
    color: ${theme.colors.termsPrivacy};
  }
`

const SubMenu = styled.div`
  display: ${(props: any) => (props.active ? "block" : "none")};
`

const SubMenuLink = styled(Link)`
  display: block;
  padding: 12px;

  color: ${theme.colors.white};

  &:hover {
    color: ${theme.colors.termsPrivacy};
  }
`

const Gradient = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 94px;
  z-index: -3;
  /* background: rgba(0, 0, 0, 0.5); */
  opacity: ${(props: any) => (!!props.menuState ? 1 : 0)};
  pointer-events: ${(props: any) => (!!props.menuState ? "all" : "none")};
  transition: ease all 0.2s;
`

export default MobileMenu
