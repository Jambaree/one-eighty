// Copyright 2020 Caleb Barnes ~ https://github.com/CalebBarnes

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
// to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
// and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import { useState } from "react"

export const useLazyFetch = (endpoint, options = {}) => {
  const { onError = null, onCompleted = null, ...restOptions } = options

  const [state, setState] = useState({
    error: null,
    data: null,
    loading: false,
    called: false
  })

  const callback = async args => {
    const { queryString, ...restArgs } = args || {}
    setState({
      ...state,
      called: true,
      loading: true,
      error: null
    })

    await fetch(!!queryString ? `${endpoint}${queryString}` : endpoint, {
      method: "get",
      ...restOptions,
      ...restArgs
    })
      .then(async response => {
        const json = await response.json()

        setState({
          ...state,
          loading: false,
          data: response.status === 200 ? json : null,
          called: true,
          error: response.status !== 200 ? json : null
        })

        if (response.status === 200) {
          onCompleted && typeof onCompleted === `function` && onCompleted(json)
        } else {
          onError && typeof onError === `function` && onError(json)
        }
      })
      .catch(error => {
        setState({ ...state, error, loading: false, called: true })
        onError && typeof onError === `function` && onError(error)
      })
  }

  return [callback, state]
}

export default useLazyFetch
