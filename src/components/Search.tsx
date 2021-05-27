import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { useLazyQuery } from "@apollo/react-hooks"
import { Spinner, Input } from "theme-ui"

// import app components
import SearchIcon from "../icons/search.svg"
import { CONTENT_NODES_QUERY } from "../apollo/query"
import { formatLink } from "../utils"

const Searchbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState("")

  // TODO: handle error messages
  const [executeSearch, { loading, data }] = useLazyQuery(CONTENT_NODES_QUERY)

  useEffect(() => {
    if (data) {
      setIsOpen(true)
    }
  }, [data])

  useEffect(() => {
    if (value === "") {
      setIsOpen(false)
    }
  }, [value])

  const onSubmit = (e) => {
    e.preventDefault()

    value &&
      executeSearch({
        variables: { search: value },
        fetchPolicy: "network-only",
      })

    setIsOpen(true)
  }

  return (
    <Container>
      <SearchBar>
        <Form onSubmit={onSubmit}>
          <Input
            placeholder="Search what's new..."
            value={value}
            onChange={({ target }) => setValue(target.value)}
            onKeyDown={(e) => e.key === "Escape" && setIsOpen(false)}
            sx={{
              paddingRight: 40,
              backgroundColor: "white",
              outline: "none",
              border: "1px solid #DBDBDB",
              "&:hover": {
                borderColor: "black50",
              },
              "&:disabled": {
                borderColor: "black25",
                color: "black10",
              },
              "&:focus": {
                border: "1px solid #FF7B59",
              },
              "&:focus-visible": {
                border: "1px solid #FF7B59",
              },
            }}
            variant="text.paragraph"
          />
          {loading ? (
            <StyledSpinner size={20} />
          ) : (
            <ToggleButton onClick={onSubmit}>
              <SearchIcon />
            </ToggleButton>
          )}
        </Form>
        <Results isOpen={isOpen}>
          {value && data?.contentNodes?.nodes?.length === 0 && (
            <NoResults>No results</NoResults>
          )}
          {value &&
            !loading &&
            data?.contentNodes?.nodes &&
            data.contentNodes.nodes.map((o) => {
              return (
                <Item
                  key={o.id}
                  to={formatLink(o.uri)}
                  onClick={() => setIsOpen(false)}
                >
                  {o.title}
                </Item>
              )
            })}
        </Results>
      </SearchBar>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 60px;
`

const SearchBar = styled.div`
  position: relative;
  max-width: 200px;
  width: 100%;
`

const Results = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 10;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`

const NoResults = styled.div`
  display: block;
  width: 100%;
  padding: 10px 20px;
`

const Item = styled(Link)`
  display: block;
  width: 100%;
  padding: 10px 20px;
  text-decoration: none;
  color: inherit;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`

const ToggleButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1;
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  font: inherit;
  line-height: normal;
  margin-left: 15px;
  color: "coral";
  cursor: pointer;
  outline: none;

  svg path {
    fill: #e86140;
  }

  &:hover {
    color: black;
  }
`

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 350px;
`

const StyledSpinner = styled(Spinner)`
  position: absolute;
  right: 10px;
  top: 10px;
`

export default Searchbar
