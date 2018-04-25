// @flow

import React from "react"

import { Mutation } from "react-apollo"
import gql from "graphql-tag"

import Loading from "../common/Loading"
import ErrorMessage from "../common/ErrorMessage"

const addCommentForGuestAuthorMutation = gql`
  mutation addComment($text: String!, $authorName: String!, $articleId: ID!) {
    addCommentAsGuest(text: $text, authorName: $authorName, articleId: $articleId) {
      id
      comments {
        id
        text
        date
        guestAuthor
        author {
          id
        }
      }
    }
  }
`

type Props = {
  articleId: string,
}

const AddComment = ({ articleId }: Props) => {
  let textInput
  let authorNameInput

  return (
    <Mutation mutation={addCommentForGuestAuthorMutation}>
      {(addComment, { data, loading, called, error }) => {
        if (loading) {
          return <Loading />
        } else if (error) {
          return <ErrorMessage error={error} />
        } else {
        }

        return (
          <div>
            {called && <p>Comment added!</p>}

            <form
              onSubmit={e => {
                e.preventDefault()
                addComment({
                  variables: {
                    text: textInput.value,
                    authorName: authorNameInput.value,
                    articleId: articleId,
                  },
                })

                textInput.value = ""
                authorNameInput = ""
              }}
            >
              <div className="form-group">
                <label htmlFor="text-input">Author</label>
                <input
                  className="form-control"
                  id="text-input"
                  type="text"
                  ref={node => {
                    authorNameInput = node
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="author-name-input">Text</label>
                <textarea
                  className="form-control"
                  id="author-name-input"
                  ref={node => {
                    textInput = node
                  }}
                />
              </div>

              <button className="btn btn-default" type="submit">
                Add Comment
              </button>
            </form>
          </div>
        )
      }}
    </Mutation>
  )
}

export default AddComment
