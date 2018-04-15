// @flow

import React from "react"

import { graphql } from "react-apollo"
import gql from "graphql-tag"

import { Link } from "react-router-dom"
import type { Author } from "../common.types"

import FormattedDate from "../common/FormattedDate"
import Loading from "../common/Loading"

import ArticleTitleShort from "../articles/ArticleTitleShort"

type Props = {
  author: Author,
  loading: boolean,
  error: any,
}

const AuthorDetailsPage = ({ loading, error, author }: Props) => {
  if (loading) {
    return <Loading />
  } else if (error) {
    return <div>Error</div>
  } else {
    return (
      <div>
        <h2>{author.name}</h2>
        <p>{author.articles.length} Articles:</p>

        {author.articles.map(article => (
          <div key={article.id}>
            <div style={{ marginBottom: "1em" }}>
              <ArticleTitleShort article={article} />
            </div>
            <div>{article.teaser}</div>
            <hr />
          </div>
        ))}
      </div>
    )
  }
}

const authorDetailsQuery = gql`
  query authorDetails($id: ID) {
    author(id: $id) {
      id
      name
      articles {
        id
        permalink
        title
        teaser
        releaseDate
        text
        authors {
          id
          name
        }
        comments {
          text
        }
      }
    }
  }
`

export default graphql(authorDetailsQuery, {
  options: props => ({
    variables: {
      id: props.match.params.id,
    },
  }),
  props: ({ ownProps, data }) => ({
    ...ownProps,
    loading: data.loading,
    error: data.error,
    data: data,
    author: data.author,
  }),
})(AuthorDetailsPage)
