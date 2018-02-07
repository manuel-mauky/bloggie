// @flow

import React from "react"

import type { Author } from "../../common.types"
import * as R from "ramda"

type Props = {
  authors: Array<Author>,
}

const AuthorsNameList = ({ authors }: Props) => {
  if (authors && authors.length > 0) {
    return <span>{R.join(", ", authors.map(a => a.name))}</span>
  } else {
    return <span>no author</span>
  }
}

export default AuthorsNameList
