package eu.lestard.bloggie.server.boot.repositories;

import org.springframework.data.repository.CrudRepository;

import eu.lestard.bloggie.server.boot.data.Author;

public interface AuthorRepository extends CrudRepository<Author, String> {

}
