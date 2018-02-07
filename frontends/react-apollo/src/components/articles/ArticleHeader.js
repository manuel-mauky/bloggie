// @flow

import React from "react"
import { Link } from "react-router-dom"

import type { Author } from "../../common.types"

import AuthorsNameList from "./AuthorsNameList"

type Props = {
  permalink: string,
  title: string,
  releaseDate: Date | string,
  authors: Array<Author>,
  style?: any,
}

const ArticleHeader = (props: Props) => (
  <header>
    <h1>
      <Link to={`/articles/${props.permalink}`}>{props.title}</Link>
    </h1>

    <strong>
      <AuthorsNameList authors={props.authors} />
      <span> | </span>
      <span>{props.releaseDate} </span>
    </strong>
  </header>
)

export default ArticleHeader
