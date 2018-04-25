// @flow

import React from "react"

import { graphql } from "react-apollo"
import gql from "graphql-tag"

import Loading from "../common/Loading"

import ErrorMessage from "../common/ErrorMessage"

import type { TagWithArticleShortInfo } from "./TagDetails"
import type { Error } from "../../common.types"
import TagDetails from "./TagDetails"

type Props = {
  loading: boolean,
  error: Error,
  tags: Array<TagWithArticleShortInfo>,
}

const TagOverviewPage = ({ loading, tags, error, data }: Props) => {
  if (loading) {
    return <Loading />
  } else if (error) {
    return <ErrorMessage error={error} />
  } else {
    return <div>{tags.map(tag => <TagDetails key={tag.id} tag={tag} />)}</div>
  }
}

const tagListQuery = gql`
  query tagList {
    tags {
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

export default graphql(tagListQuery, {
  props: ({ ownProps, data }) => ({
    loading: data.loading,
    tags: data.tags,
    error: data.error,
    ...ownProps,
  }),
})(TagOverviewPage)
