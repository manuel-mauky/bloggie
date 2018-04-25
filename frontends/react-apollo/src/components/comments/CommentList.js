// @flow

import React from "react"
import { graphql } from "react-apollo"
import gql from "graphql-tag"

import Loading from "../common/Loading"
import ErrorMessage from "../common/ErrorMessage"

import type { Comment, Error } from "../../common.types"
import CommentView from "./CommentView"

type Props = {
  comments: Array<Comment>,
  loading: boolean,
  error: Error,
}

const CommentList = ({ comments, loading, error }: Props) => {
  if (loading) {
    return <Loading />
  } else if (error) {
    return <ErrorMessage error={error} />
  } else {
    return <div>{comments.map(comment => <CommentView key={comment.id} comment={comment} />)}</div>
  }
}

const commentListQuery = gql`
  query commentList($articleId: ID!) {
    article(id: $articleId) {
      comments {
        id
        text
        date
        guestAuthor
        author {
          id
          name
        }
      }
    }
  }
`

export default graphql(commentListQuery, {
  options: props => ({
    variables: {
      articleId: props.articleId,
    },
  }),
  props: ({ ownProps, data }) => ({
    ...ownProps,
    loading: data.loading,
    error: data.error,
    comments: data.article && data.article.comments,
  }),
})(CommentList)
