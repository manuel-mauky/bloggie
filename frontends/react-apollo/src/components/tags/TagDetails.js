// @flow

import React from "react"
import { Link } from "react-router-dom"
import FormattedDate from "../common/FormattedDate"

import ArticleTitleShort from "../articles/ArticleTitleShort"

import type { Tag } from "../../common.types"

export type TagWithArticleShortInfo = Tag & {
  articles: Array<{
    id: string,
    title: string,
    permalink: string,
    releaseDate: string | date,
  }>,
}

type Props = {
  tag: TagWithArticleShortInfo,
}

const TagDetails = ({ tag }: Props) => (
  <div>
    <h2 id={tag.name}>{tag.name}</h2>

    <ul>
      {tag.articles &&
        tag.articles.map(article => (
          <li key={article.id}>
            <ArticleTitleShort article={article} />
          </li>
        ))}
    </ul>
  </div>
)

export default TagDetails
