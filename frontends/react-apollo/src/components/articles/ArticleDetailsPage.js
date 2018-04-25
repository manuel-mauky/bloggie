// @flow

import React from "react"
import { graphql } from "react-apollo"
import gql from "graphql-tag"

import type { Article, Error } from "../../common.types"

import ArticleHeader from "./ArticleHeader"
import NoMatchPage from "../NoMatchPage"
import Loading from "../common/Loading"
import ErrorMessage from "../common/ErrorMessage"

import CommentList from "../comments/CommentList"

type Props = {
  match: {
    params: {
      permalink: string,
    },
  },
  article: Article,
  loading: boolean,
  error: Error,
}

const ArticleDetailsPage = ({ article, loading, error }: Props) => {
  if (loading) {
    return <Loading />
  } else if (error) {
    return <ErrorMessage error={error} />
  } else {
    if (article) {
      return (
        <article>
          <div style={{ marginBottom: "1em" }}>
            <ArticleHeader
              permalink={article.permalink}
              title={article.title}
              releaseDate={article.releaseDate}
              authors={article.authors}
              tags={article.tags}
            />
          </div>
          <section>
            <i>{article.teaser}</i>
          </section>
          <hr />
          <section>{article.text}</section>
          <hr />
          <div>
            <h4>Comments</h4>
            <CommentList articleId={article.id} />
          </div>
        </article>
      )
    } else {
      return <NoMatchPage />
    }
  }
}

const articleDetailsQuery = gql`
  query article($permalink: String) {
    article(permalink: $permalink) {
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
      tags {
        id
        name
      }
    }
  }
`

export default graphql(articleDetailsQuery, {
  options: props => ({
    variables: {
      permalink: props.match.params.permalink,
    },
  }),
  props: ({ ownProps, data }) => ({
    ...ownProps,
    loading: data.loading,
    error: data.error,
    article: data.article,
  }),
})(ArticleDetailsPage)
