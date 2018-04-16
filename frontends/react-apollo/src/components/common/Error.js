// @flow

import React from "react"

type Props = {
  error: {
    message: string,
  },
}

const Error = ({ error }: Props) => (
  <div>
    <h2>Sorry. Something went wrong.</h2>
    <p>{error.message}</p>
  </div>
)

export default Error
