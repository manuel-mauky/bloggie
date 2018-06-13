package eu.lestard.bloggie.server.boot.data;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

@Entity(name="Comment")
public class Comment extends BaseEntity {

	@Lob
	private String text;

	@ManyToOne
	private Article article;

	private LocalDateTime date;

	@ManyToOne
	private Author author;

	private String guestAuthor;

	public Comment() {
		this.date = LocalDateTime.now();
	}

	public Comment(String guestAuthor, String text){
		this();
		this.guestAuthor = guestAuthor;
		this.text = text;
	}

	public Comment(Author author, String text) {
		this();
		this.author = author;
		this.text = text;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Article getArticle() {
		return article;
	}

	public void setArticle(Article article) {
		this.article = article;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}

	public Author getAuthor() {
		return author;
	}

	public void setAuthor(Author author) {
		this.author = author;
	}

	public String getGuestAuthor() {
		return guestAuthor;
	}

	public void setGuestAuthor(String guestAuthor) {
		this.guestAuthor = guestAuthor;
	}
}
