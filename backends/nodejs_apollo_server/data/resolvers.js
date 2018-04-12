import { Article, Author, Tag, Comment } from "./connectors"
import { Op } from "sequelize"

import R from "ramda"

const resolvers = {
  Mutation: {
    addTag(root, args) {
      return Tag.create({ name: args.name })
    },

    addArticle(root, args) {
      return Article.create(args.input)
    },

    editArticle(root, args) {
      return Article.findOne({ where: { id: args.id } }).then(article => {
        const other = R.omit(args, "id", "tags")

        return article.update(other)
      })
    },

    editTags(root, args) {
      return Article.findOne({ where: { id: args.articleId } }).then(article => {
        if (article) {
          return Tag.findAll({
            where: {
              id: {
                [Op.in]: args.tags,
              },
            },
          }).then(tags => {
            return article.setTags(tags).then(() => {
              return article
            })
          })
        } else {
          return article
        }
      })
    },
  },
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
