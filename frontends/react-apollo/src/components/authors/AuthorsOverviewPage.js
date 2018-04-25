// @flow
import React from "react"

import { graphql } from "react-apollo"
import gql from "graphql-tag"
import * as R from "ramda"

import { Link } from "react-router-dom"
import type { Author, Error } from "../common.types"

import Loading from "../common/Loading"
import ErrorMessage from "../common/ErrorMessage"

import ArticleTitleShort from "../articles/ArticleTitleShort"

type AuthorWithArticlesInfo = Author & {
  articles: Array<{
    id: string,
    title: string,
    permalink: string,
    releaseDate: string,
  }>,
}

type Props = {
  authors: Array<AuthorWithArticlesInfo>,
  loading: boolean,
  error: Error,
}

const AuthorsOverviewPage = ({ loading, authors, error }: Props) => {
  if (loading) {
    return <Loading />
  } else if (error) {
    return <ErrorMessage error={error} />
  } else {
    return (
      <div>
        {authors.map(author => (
          <div key={author.id}>
            <Link to={`/authors/${author.id}`}>
              <h2>{author.name}</h2>
            </Link>
            <p>{author.articles.length} Articles overall. Latest ones:</p>

            <ul>
              {R.take(4, author.articles).map(article => (
                <li key={article.id}>
                  <ArticleTitleShort article={article} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  }
}

const authorListQuery = gql`
  query authorList {
    authors {
      id
      name
      articles {
        id
        title
        permalink
        releaseDate
      }
    }
  }
`

export default graphql(authorListQuery, {
  props: ({ ownProps, data }) => ({
    loading: data.loading,
    error: data.error,
    authors: data.authors,
    ...ownProps,
  }),
})(AuthorsOverviewPage)
