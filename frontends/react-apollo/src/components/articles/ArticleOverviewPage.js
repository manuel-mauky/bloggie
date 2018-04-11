// @flow
import React from "react"

import type { Author } from "../../common.types"
import { graphql } from "react-apollo"
import gql from "graphql-tag"
import ArticleHeader from "./ArticleHeader"

import Loading from "../common/Loading"

type Props = {
  articles: Array<{
    id: string,
    permalink: string,
    title: string,
    teaser: string,
    releaseDate: string,
    authors: Array<Author>,
  }>,
  loading: boolean,
}

const ArticleOverviewPage = (props: Props) => {
  const { loading, articles } = props

  if (loading) {
    return <Loading />
  } else {
    return (
      <div>
        {articles.map(article => (
          <article key={article.id}>
            <ArticleHeader {...article} />

            <section>{article.teaser}</section>
          </article>
        ))}
      </div>
    )
  }
}

const articlesQuery = gql`
  query articles {
    articles {
      id
      permalink
      title
      teaser
      releaseDate
      authors {
        id
        name
      }
    }
  }
`

export default graphql(articlesQuery, {
  props: ({ ownProps, data }) => ({
    loading: data.loading,
    articles: data.articles,
    ...ownProps,
  }),
})(ArticleOverviewPage)
