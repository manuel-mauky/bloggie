package eu.lestard.bloggie.server.boot.graphql;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import eu.lestard.bloggie.server.boot.data.Article;
import eu.lestard.bloggie.server.boot.data.Comment;
import eu.lestard.bloggie.server.boot.exceptions.ArticleNotFoundException;
import eu.lestard.bloggie.server.boot.repositories.ArticleRepository;
import eu.lestard.bloggie.server.boot.repositories.CommentRepository;
import graphql.GraphQLError;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Mutation implements GraphQLMutationResolver {

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private CommentRepository commentRepository;

    public Optional<Article> addCommentAsGuest(String articleId, String authorName, String text) {

        Optional<Article> optionalArticle = articleRepository.findById(articleId);

        if (!optionalArticle.isPresent()) {
            throw new ArticleNotFoundException("The article with the given id was not found.", articleId);
        }

        Article article = optionalArticle.get();

        Comment comment = new Comment(authorName, text);

        Comment persistedComment = commentRepository.save(comment);
        article.getComments().add(persistedComment);
        articleRepository.save(article);

        return optionalArticle;
    }
}
