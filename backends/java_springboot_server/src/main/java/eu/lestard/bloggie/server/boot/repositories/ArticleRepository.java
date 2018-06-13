package eu.lestard.bloggie.server.boot.repositories;

import org.springframework.data.repository.CrudRepository;

import eu.lestard.bloggie.server.boot.data.Article;

public interface ArticleRepository extends CrudRepository<Article, String> {

}
