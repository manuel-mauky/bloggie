// @flow

import React from "react"

import type { Comment } from "../../common.types"

import FormattedDate from "../common/FormattedDate"

import { Link } from "react-router-dom"

type Props = {
  comment: Comment,
}

const CommentView = ({ comment }: Props) => {
  let authorBox
  if (comment.guestAuthor) {
    authorBox = comment.guestAuthor
  } else if (comment.author) {
    const author = comment.author
    authorBox = (
      <Link key={author.id} to={`/authors/${author.id}`}>
        {author.name}
      </Link>
    )
  }

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <FormattedDate className="panel-title" date={comment.date} />
        <span> {authorBox}</span>
      </div>
      <div className="panel-body">{comment.text}</div>
    </div>
  )
}

export default CommentView
