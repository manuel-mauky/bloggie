package eu.lestard.bloggie.server.boot.repositories;

import org.springframework.data.repository.CrudRepository;

import eu.lestard.bloggie.server.boot.data.Tag;

public interface TagRepository extends CrudRepository<Tag, String> {

}
