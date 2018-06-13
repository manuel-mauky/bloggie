package eu.lestard.bloggie.server.boot.data;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

@Entity(name="Author")
public class Author extends BaseEntity {

	private String name;

	@ManyToMany(mappedBy = "authors")
	private List<Article> articles = new ArrayList<>();

	@OneToMany
	private List<Comment> comments = new ArrayList<>();

	public Author() {}


	public Author(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Article> getArticles() {
		return articles;
	}

	public void setArticles(List<Article> articles) {
		this.articles = articles;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}
}
