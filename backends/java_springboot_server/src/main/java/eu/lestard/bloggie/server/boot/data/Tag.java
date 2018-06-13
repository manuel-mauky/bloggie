package eu.lestard.bloggie.server.boot.data;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;

@Entity(name="Tag")
public class Tag extends BaseEntity {

	private String name;

	@ManyToMany(mappedBy = "tags")
	private List<Article> articles = new ArrayList<>();

	public Tag() {}

	public Tag(String name) {
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
}
