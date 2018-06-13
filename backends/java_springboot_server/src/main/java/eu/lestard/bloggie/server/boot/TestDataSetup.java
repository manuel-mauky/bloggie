package eu.lestard.bloggie.server.boot;

import java.sql.SQLOutput;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.javafaker.Faker;
import com.github.slugify.Slugify;

import eu.lestard.bloggie.server.boot.data.Article;
import eu.lestard.bloggie.server.boot.data.Author;
import eu.lestard.bloggie.server.boot.data.Comment;
import eu.lestard.bloggie.server.boot.data.Tag;
import eu.lestard.bloggie.server.boot.repositories.ArticleRepository;
import eu.lestard.bloggie.server.boot.repositories.AuthorRepository;
import eu.lestard.bloggie.server.boot.repositories.CommentRepository;
import eu.lestard.bloggie.server.boot.repositories.TagRepository;

@Service
public class TestDataSetup {

	Random random = new Random(1);
	Faker faker = new Faker(random);
	Slugify slg = new Slugify();

	@Autowired
	private ArticleRepository articleRepository;

	@Autowired
	private AuthorRepository authorRepository;

	@Autowired
	private TagRepository tagRepository;

	@Autowired
	private CommentRepository commentRepository;

	@Transactional
	public void run() {
		createTestData();

		printTestData();
	}

	private void printTestData() {
		System.out.println("TestData:");

		System.out.println("Authors:");

		authorRepository.findAll().forEach(author -> {
			System.out.println("\tname: " + author.getName());
			System.out.println("\tarticles: " + Optional.ofNullable(author.getArticles()).map(List::size).map(Object::toString).orElse("null"));
		});

		System.out.println("\nArticles:");

		articleRepository.findAll().forEach(article -> {
			System.out.println("\ttitle: " + article.getTitle());
			System.out.println("\tpermalink: " + article.getPermalink());
			System.out.println("\tteaser length: " + article.getTeaser().length());
			System.out.println("\ttext length: " + article.getText().length());
			System.out.println("\tAuthors:");
			article.getAuthors().forEach(author -> {
				System.out.println("\t\tname: " + author.getName());
				System.out.println("\t\tno of Articles: " + Optional.ofNullable(author.getArticles()).map(List::size).map(Object::toString).orElse("null"));
				System.out.println();
			});
			System.out.println("\tTags:");
			article.getTags().forEach(tag -> {
				System.out.println("\t\tname: " + tag.getName());
				System.out.println("\t\tno of Articles: " + Optional.ofNullable(tag.getArticles()).map(List::size).map(Object::toString).orElse("null"));
				System.out.println();
			});
			System.out.println("\tComments:");
			article.getComments().forEach(comment -> {
				System.out.println("\t\tauthor: " + Optional.ofNullable(comment.getAuthor()).map(Author::getName).orElse("null"));
				System.out.println("\t\tguestAuthor: " + comment.getGuestAuthor());
				System.out.println("\t\tarticle ref: " + Optional.ofNullable(comment.getArticle()).map(Article::getTitle).orElse("null"));
				System.out.println();
			});
		});
	}

	private void createTestData() {
		final Author hugo = authorRepository.save(new Author("Hugo"));
		final Author luise = authorRepository.save(new Author("Luise"));
		final Author susanne = authorRepository.save(new Author("Susanne"));
		final Author gustaf = authorRepository.save(new Author("Gustaf"));

		final Tag tagJava = tagRepository.save(new Tag("Java"));
		final Tag tagJavaScript = tagRepository.save(new Tag("JavaScript"));
		final Tag tagGraphql = tagRepository.save(new Tag("GraphQL"));

		Article article1 = createArticle(Arrays.asList(hugo), Arrays.asList(tagJava));
		Article article2 = createArticle(Arrays.asList(hugo), Arrays.asList(tagJava, tagJavaScript));
		Article article3 = createArticle(Arrays.asList(hugo, susanne), Arrays.asList(tagJava));
		Article article4 = createArticle(Arrays.asList(hugo, susanne), Arrays.asList(tagGraphql));
		Article article5 = createArticle(Arrays.asList(susanne), Arrays.asList(tagGraphql));
		Article article6 = createArticle(Arrays.asList(susanne), Arrays.asList(tagGraphql));
		Article article7 = createArticle(Arrays.asList(luise), Arrays.asList(tagGraphql, tagJava));
		Article article8 = createArticle(Arrays.asList(luise), Arrays.asList(tagGraphql));
		Article article9 = createArticle(Arrays.asList(luise, gustaf), Arrays.asList(tagJavaScript));
		Article article10 = createArticle(Arrays.asList(gustaf), Arrays.asList(tagGraphql));
	}

	private Article createArticle(List<Author> authors, List<Tag> tags) {
		String title = faker.book().title();
		String permalink = slg.slugify(title);
		String teaser = faker.lorem().paragraph(2);
		String text = faker.lorem().paragraphs(20).stream().collect(Collectors.joining("\n"));
		Article article = new Article(title, permalink, teaser, text);
		article.setAuthors(authors);
		article.setTags(tags);

		Comment comment1 = commentRepository.save(new Comment("horsti", "Erster!!"));
		Comment comment2 = commentRepository.save(new Comment("lutz", faker.lorem().sentence(20)));
		Comment comment3 = commentRepository.save(new Comment(authors.get(0), "Danke läuft"));

		List<Comment> comments = Arrays.asList(comment1, comment2, comment3);
		article.setComments(comments);

		Article persistedArticle = articleRepository.save(article);

		for (Author author : authors) {
			author.getArticles().add(persistedArticle);
			authorRepository.save(author);
		}

		for (Tag tag : tags) {
			tag.getArticles().add(persistedArticle);
			tagRepository.save(tag);
		}

		for (Comment comment : comments) {
			comment.setArticle(persistedArticle);
			commentRepository.save(comment);
		}



		return persistedArticle;
	}

}
