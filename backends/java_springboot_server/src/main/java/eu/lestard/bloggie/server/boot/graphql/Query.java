package eu.lestard.bloggie.server.boot.graphql;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;

import eu.lestard.bloggie.server.boot.data.Tag;
import eu.lestard.bloggie.server.boot.repositories.TagRepository;

@Service
public class Query implements GraphQLQueryResolver {

	@Autowired
	private TagRepository tagRepository;


	public Iterable<Tag> tags() {
		return tagRepository.findAll();
	}


}
