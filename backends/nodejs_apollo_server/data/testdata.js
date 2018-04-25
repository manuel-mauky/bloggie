import { db, Author, Tag } from "./connectors"

import slug from "slug"
import R from "ramda"

import faker from "faker"

const NUMBER_OF_ARTICLES = 5
const NUMBER_OF_AUTHORS = 3
const NUMBER_OF_COMMENTS_PER_ARTICLE = 3

const slugify = input => slug(input.toLowerCase())

const createTestData = () => {
  faker.seed(123)

  db.sync({ force: true }).then(() => {
    Tag.bulkCreate([{ name: "javascript" }, { name: "web" }, { name: "backend" }])
      .then(() => {
        return Tag.findAll()
      })
      .then(tags => {
        R.times(() => {
          return Author.create({
            name: faker.name.findName(),
          }).then(author => {
            return R.times(() => {
              const title = faker.lorem.sentence()

              return author
                .createArticle({
                  title: title,
                  permalink: slugify(title),
                  teaser: faker.lorem.sentences(3),
                  text: faker.lorem.text(),
                  releaseDate: faker.date.recent(),
                })
                .then(article => {
                  const noOfTags = faker.random.number(tags.length)

                  const shuffledTags = faker.helpers.shuffle(tags)

                  R.times(i => {
                    article.addTag(shuffledTags[i])
                  }, noOfTags)

                  return article
                })
                .then(article => {
                  return R.times(i => {
                    if (faker.random.boolean()) {
                      return article.createComment({
                        text: faker.lorem.sentences(3),
                        guestAuthor: faker.name.findName(),
                        date: faker.date.recent(),
                      })
                    } else {
                      return article
                        .createComment({
                          text: faker.lorem.sentences(3),
                          author: author,
                          date: faker.date.recent(),
                        })
                        .then(comment => {
                          comment.setAuthor(author)
                          return comment
                        })
                    }
                  }, NUMBER_OF_COMMENTS_PER_ARTICLE)
                })
            }, NUMBER_OF_ARTICLES)
          })
        }, NUMBER_OF_AUTHORS)
      })
  })
}

export { createTestData }
