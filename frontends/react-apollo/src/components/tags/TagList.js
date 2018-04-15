// @flow

import React from "react"

import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import type { Tag } from "../../common.types"
import { Link } from "react-router-dom"

import faTag from "@fortawesome/fontawesome-free-solid/faTag"

type Props = {
  authors: Array<Tag>,
}

const TagList = ({ tags }: Props) => {
  if (tags && tags.length > 0) {
    return (
      <span>
        {tags.map(tag => (
          <Link to={`/tags#${tag.name}`} key={tag.id}>
            <FontAwesomeIcon icon={faTag} />
            {tag.name}
            &nbsp;
          </Link>
        ))}
      </span>
    )
  } else {
    return null
  }
}

export default TagList
