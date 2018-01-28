import { Article, Author, Tag, Comment } from "./connectors"

const resolvers = {
  Query: {
    articles(root, args) {
      return Article.findAll()
    },
    article(root, args) {
      return Article.find({ where: args })
    },
    authors(root, args) {
      return Author.findAll()
    },
    author(root, args) {
      return Author.find({ where: args })
    },
    tags(root, args) {
      return Tag.findAll()
    },
  },

  Article: {
    tags(article) {
      return article.getTags()
    },
    authors(article) {
      return article.getAuthors()
    },
    comments(article) {
      return article.getComments()
    },
  },

  Author: {
    articles(author) {
      return author.getArticles()
    },
    comments(author) {
      return author.getComments()
    },
  },

  Tag: {
    articles(tag) {
      return tag.getArticles()
    },
  },

  Comment: {
    article(comment) {
      return comment.getArticle()
    },
    author(comment) {
      return comment.getAuthor()
    },
  },
}

export default resolvers
