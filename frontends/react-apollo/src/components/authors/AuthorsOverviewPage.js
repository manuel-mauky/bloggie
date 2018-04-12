// @flow
import React from "react"

import { graphql } from "react-apollo"
import gql from "graphql-tag"
import * as R from "ramda"

import { Link } from "react-router-dom"
import type { Author } from "../common.types"

import ArticleHeader from "../articles/ArticleHeader"
import FormattedDate from "../common/FormattedDate"
import Loading from "../common/Loading"

type AuthorWithArticlesInfo = Author & {
  articles: Array<{
    id: string,
    title: string,
    permalink: string,
    releaseDate: string,
  }>,
}

type Props = {
  authors?: Array<AuthorWithArticlesInfo>,
  loading: boolean,
}

const AuthorsOverviewPage = ({ loading, authors }: Props) => {
  if (loading) {
    return <Loading />
  } else {
    return (
      <div>
        {authors.map(author => (
          <div key={author.id}>
            <h2>{author.name}</h2>
            <p>{author.articles.length} Articles. Latest:</p>

            {R.take(3, author.articles).map(article => (
              <div key={article.id}>
                <p>
                  <Link to={`/articles/${article.permalink}`}>
                    <span className="h4">{article.title} </span>
                  </Link>
                  <span className="label label-default">
                    <FormattedDate date={article.releaseDate} />
                  </span>
                </p>
              </div>
            ))}
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
    authors: data.authors,
    data: data,
    ...ownProps,
  }),
})(AuthorsOverviewPage)
