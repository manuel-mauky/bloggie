import React from "react"
import FormattedDate from "./FormattedDate"

import createComponentWithIntl from "../util/createComponentWithIntl"

import renderer from "react-test-renderer"

it("snapshot renders correctly with string date", () => {
  const tree = createComponentWithIntl(<FormattedDate date="2017-03-01" />).toJSON()

  expect(tree).toMatchSnapshot()
})

it("snapshot renders correctly with Date", () => {
  const tree = createComponentWithIntl(<FormattedDate date={new Date(2017, 3, 1)} />).toJSON()

  expect(tree).toMatchSnapshot()
})
