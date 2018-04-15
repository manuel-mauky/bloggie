// @flow

import React from "react"
import { Link } from "react-router-dom"

import type { Author, Tag } from "../../common.types"

import AuthorsNameList from "../authors/AuthorsNameList"
import TagList from "../tags/TagList"

import FormattedDate from "../common/FormattedDate"

type Props = {
  permalink: string,
  title: string,
  releaseDate: Date | string,
  authors: Array<Author>,
  style?: any,
  tags: Array<Tag>,
}

const ArticleHeader = (props: Props) => (
  <header>
    <h1>
      <Link to={`/articles/${props.permalink}`}>{props.title}</Link>
    </h1>

    <div>
      <h4>
        <AuthorsNameList authors={props.authors} />
        <span> | </span>
        <FormattedDate date={props.releaseDate} />
      </h4>
    </div>
    {props.tags &&
      props.tags.length > 0 && (
        <div>
          <TagList tags={props.tags} />
        </div>
      )}
  </header>
)

export default ArticleHeader
