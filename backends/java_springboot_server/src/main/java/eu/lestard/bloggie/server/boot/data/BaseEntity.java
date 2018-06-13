package eu.lestard.bloggie.server.boot.data;

import java.util.Objects;
import java.util.UUID;

import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class BaseEntity {

	@Id
	private final String id;

	public BaseEntity() {
		this.id = UUID.randomUUID().toString();
	}

	public String getId() {
		return id;
	}

	@Override
	public String toString() {
		return this.getClass().getSimpleName() + "{" +
				"id='" + id + "\n" +
						"}";
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		BaseEntity that = (BaseEntity) o;
		return Objects.equals(id, that.id);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id);
	}
}
