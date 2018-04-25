// @flow

import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"

import Loading from "../common/Loading"
import ErrorMessage from "../common/ErrorMessage"

import type { Comment, Error } from "../../common.types"
import CommentView from "./CommentView"

const commentListQuery = gql`
  query commentList($articleId: ID!) {
    article(id: $articleId) {
      id
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
type InternalProps = {
  comments: Array<Comment>,
  loading: boolean,
  error: Error,
}

const CommentListView = ({ loading, error, comments }: InternalProps) => {
  if (loading) {
    return <Loading />
  } else if (error) {
    return <ErrorMessage error={error} />
  } else {
    if (comments) {
      return <div>{comments.map(comment => <CommentView key={comment.id} comment={comment} />)}</div>
    }
  }
}

type Props = {
  articleId: string,
}

const CommentList = ({ articleId }: Props) => (
  <Query query={commentListQuery} variables={{ articleId: articleId }}>
    {({ loading, error, data }) => (
      <CommentListView loading={loading} error={error} comments={data && data.article && data.article.comments} />
    )}
  </Query>
)

export default CommentList
