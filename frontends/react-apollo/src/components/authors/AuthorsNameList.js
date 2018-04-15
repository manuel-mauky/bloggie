// @flow

import React from "react"

import type { Author } from "../../common.types"
import { Link } from "react-router-dom"

type Props = {
  authors: Array<Author>,
}

const AuthorsNameList = ({ authors }: Props) => {
  if (authors && authors.length > 0) {
    return (
      <span>
        {authors.map(author => (
          <Link key={author.id} to={`/authors/${author.id}`}>
            {author.name}{" "}
          </Link>
        ))}
      </span>
    )
  } else {
    return <span>no author</span>
  }
}

export default AuthorsNameList
