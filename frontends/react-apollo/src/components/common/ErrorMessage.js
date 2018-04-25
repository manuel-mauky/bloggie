// @flow

import React from "react"
import type { Error } from "../../common.types"

type Props = {
  error: Error,
}

const ErrorMessage = ({ error }: Props) => (
  <div>
    <h2>Sorry. Something went wrong.</h2>
    <p>{error.message}</p>
  </div>
)

export default ErrorMessage
