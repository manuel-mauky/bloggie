package eu.lestard.bloggie.server.boot.repositories;

import org.springframework.data.repository.CrudRepository;

import eu.lestard.bloggie.server.boot.data.Author;

import java.util.Optional;

public interface AuthorRepository extends CrudRepository<Author, String> {

    Optional<Author> findByName(String name);

    Optional<Author> findByIdAndName(String id, String name);
}
