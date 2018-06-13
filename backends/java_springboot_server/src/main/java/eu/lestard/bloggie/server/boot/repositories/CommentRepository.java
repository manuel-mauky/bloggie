package eu.lestard.bloggie.server.boot.repositories;

import org.springframework.data.repository.CrudRepository;

import eu.lestard.bloggie.server.boot.data.Comment;

public interface CommentRepository extends CrudRepository<Comment, String> {

}
