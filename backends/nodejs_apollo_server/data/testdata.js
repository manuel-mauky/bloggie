import { db, Author, Tag } from './connectors'

import R from 'ramda'

import faker from 'faker'

const createTestData = () => {
    faker.seed(123)

    db.sync({ force: true }).then(() => {
        Tag.bulkCreate([{ name: 'javascript' }, { name: 'web' }, { name: 'backend' }])
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
}

export { createTestData }
