package eu.lestard.bloggie.server.boot.graphql;

import java.util.Optional;

import eu.lestard.bloggie.server.boot.data.Article;
import eu.lestard.bloggie.server.boot.data.Author;
import eu.lestard.bloggie.server.boot.repositories.ArticleRepository;
import eu.lestard.bloggie.server.boot.repositories.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;

import eu.lestard.bloggie.server.boot.data.Tag;
import eu.lestard.bloggie.server.boot.repositories.TagRepository;

@Service
public class Query implements GraphQLQueryResolver {

    @Autowired
    private TagRepository tagRepository;

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private AuthorRepository authorRepository;

    public Iterable<Tag> tags() {
        return tagRepository.findAll();
    }


    public Optional<Article> article(Optional<String> id, Optional<String> permalink) {

        if (id.isPresent() && !permalink.isPresent()) {
            return articleRepository.findById(id.get());
        }

        if (permalink.isPresent() && !id.isPresent()) {
            return articleRepository.findByPermalink(permalink.get());
        }

        if(permalink.isPresent()) {
            return articleRepository.findByIdAndPermalink(id.get(), permalink.get());
        }

        return Optional.empty();
    }

    public Iterable<Article> articles() {
        return articleRepository.findAll();
    }

    public Optional<Author> author(Optional<String> id, Optional<String> name) {
        if (id.isPresent() && !name.isPresent()) {
            return authorRepository.findById(id.get());
        }

        if (name.isPresent() && !id.isPresent()) {
            return authorRepository.findByName(name.get());
        }

        if(name.isPresent()) {
            return authorRepository.findByIdAndName(id.get(), name.get());
        }

        return Optional.empty();
    }

    public Iterable<Author> authors () {
        return authorRepository.findAll();
    }

}
