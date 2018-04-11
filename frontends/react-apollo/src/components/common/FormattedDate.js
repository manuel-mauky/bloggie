// @flow

import React from "react"
import moment from "moment"
import { injectIntl } from "react-intl"

type Props = {
  date: Date | string,
  intl: any,
}

const FormattedDate = ({ date, intl }: Props) => {
  // moment.js creates date object either from String or JS Date
  const momentDate = moment(date)

  const formattedDate = intl.formatDate(momentDate.toDate())
  // const formattedDate = date.format('MMMM Do YYYY, h:mm:ss a');

  return <time dateTime={formattedDate}>{formattedDate}</time>
}

export default injectIntl(FormattedDate)
