import Sequelize from "sequelize"

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
  date: { type: Sequelize.DATE },
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

export { Author, Article, Comment, Tag, db }
