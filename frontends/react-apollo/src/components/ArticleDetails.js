// @flow

import React from "react"

const ArticleDetails = props => {
  return (
    <div>
      <p>Article Details {props.match.params.permalink}</p>
    </div>
  )
}

export default ArticleDetails
