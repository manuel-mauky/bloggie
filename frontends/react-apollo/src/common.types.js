// @flow

export type Error = {
  message: string,
}

export type Author = {
  id: string,
  name: string,
}

export type Tag = {
  id: string,
  name: string,
}

export type Article = {
  id: string,
  permalink: string,
  title: string,
  teaser: string,
  text: string,
  releaseDate: Date | string,
  authors: Array<Author>,
  tags: Array<Tag>,
}

export type Comment = {
  id: string,
  text: string,
  date: Date | string,
  guestAuthor: ?string,
  author: ?Author,
}
