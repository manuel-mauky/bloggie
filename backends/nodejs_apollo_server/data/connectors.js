import Sequelize from "sequelize"
import R from "ramda"

import faker from "faker"

const db = new Sequelize("bloggie", null, null, {
  dialect: "sqlite",
  storage: "./bloggie.sqlite",
})

const AuthorModel = db.define("author", {
  name: { type: Sequelize.STRING },
})

const ArticleModel = db.define("article", {
  title: { type: Sequelize.STRING },
  permalink: { type: Sequelize.STRING },
  teaser: { type: Sequelize.STRING },
  text: { type: Sequelize.STRING },
  releaseDate: { type: Sequelize.DATE },
})

const TagModel = db.define("tag", {
  name: { type: Sequelize.STRING },
})

const CommentModel = db.define("comment", {
  text: { type: Sequelize.STRING },
  guestAuthor: { type: Sequelize.STRING },
})

AuthorModel.belongsToMany(ArticleModel, { through: "author_article" })
ArticleModel.belongsToMany(AuthorModel, { through: "author_article" })

ArticleModel.hasMany(CommentModel)
CommentModel.belongsTo(ArticleModel)

AuthorModel.hasMany(CommentModel)
CommentModel.belongsTo(AuthorModel)

ArticleModel.belongsToMany(TagModel, { through: "article_tag" })
TagModel.belongsToMany(ArticleModel, { through: "article_tag" })

const Author = db.models.author
const Article = db.models.article
const Comment = db.models.comment
const Tag = db.models.tag

faker.seed(123)

db.sync({ force: true }).then(() => {
  TagModel.bulkCreate([{ name: "javascript" }, { name: "web" }, { name: "backend" }])
    .then(() => {
      return TagModel.findAll()
    })
    .then(tags => {
      R.times(() => {
        return AuthorModel.create({
          name: faker.name.findName(),
        }).then(author => {
          return R.times(() => {
            const title = faker.lorem.sentence()

            return author
              .createArticle({
                title: title,
                permalink: faker.helpers.slugify(title),
                teaser: faker.lorem.sentences(3),
                text: faker.lorem.text(),
                releaseDate: faker.date.recent(),
              })
              .then(article => {
                article.addTag(tags[faker.random.number(tags.length - 1)])
                return article
              })
              .then(article => {
                if (faker.random.boolean()) {
                  return article.createComment({
                    text: faker.lorem.sentences(3),
                    guestAuthor: faker.name.findName(),
                  })
                } else {
                  return article
                    .createComment({
                      text: faker.lorem.sentences(3),
                      author: author,
                    })
                    .then(comment => {
                      comment.setAuthor(author)
                      return comment
                    })
                }
              })
          }, 5)
        })
      }, 3)
    })
})

export { Author, Article, Comment, Tag }
