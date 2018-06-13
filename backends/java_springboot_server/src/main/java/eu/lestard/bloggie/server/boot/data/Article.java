package eu.lestard.bloggie.server.boot.data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

@Entity(name="Article")
public class Article extends BaseEntity {

	private String title;

	private String permalink;

	@Lob
	private String teaser;

	@Lob
	private String text;

	private LocalDateTime releaseDate;

	@ManyToMany
	private List<Tag> tags = new ArrayList<>();

	@ManyToMany
	private List<Author> authors = new ArrayList<>();

	@OneToMany
	private List<Comment> comments = new ArrayList<>();

	public Article() {
		this.releaseDate = LocalDateTime.now();
	}

	public Article(String title, String permalink, String teaser, String text) {
		this.title = title;
		this.permalink = permalink;
		this.teaser = teaser;

		this.text = text;

		this.releaseDate = LocalDateTime.now();
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getPermalink() {
		return permalink;
	}

	public void setPermalink(String permalink) {
		this.permalink = permalink;
	}

	public String getTeaser() {
		return teaser;
	}

	public void setTeaser(String teaser) {
		this.teaser = teaser;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public LocalDateTime getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(LocalDateTime releaseDate) {
		this.releaseDate = releaseDate;
	}

	public List<Tag> getTags() {
		return tags;
	}

	public void setTags(List<Tag> tags) {
		this.tags = tags;
	}

	public List<Author> getAuthors() {
		return authors;
	}

	public void setAuthors(List<Author> authors) {
		this.authors = authors;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}
}
