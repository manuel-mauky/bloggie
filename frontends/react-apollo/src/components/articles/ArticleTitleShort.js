// @flow

import React from "react"
import { Link } from "react-router-dom"
import FormattedDate from "../common/FormattedDate"

type Props = {
  article: {
    permalink: string,
    title: string,
    releaseDate: string | date,
  },
}

const ArticleTitleShort = ({ article }: Props) => (
  <Link to={`/articles/${article.permalink}`}>
    <span className="h4">{article.title} </span>
    <span> | </span>
    <FormattedDate date={article.releaseDate} />
  </Link>
)

export default ArticleTitleShort
