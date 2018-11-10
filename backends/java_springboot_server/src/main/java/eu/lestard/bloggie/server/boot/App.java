package eu.lestard.bloggie.server.boot;

import javax.annotation.PostConstruct;

import eu.lestard.bloggie.server.boot.graphql.Mutation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.coxautodev.graphql.tools.SchemaParser;

import eu.lestard.bloggie.server.boot.graphql.GraphQLLocalDateTime;
import eu.lestard.bloggie.server.boot.graphql.Query;
import graphql.schema.GraphQLSchema;

@SpringBootApplication
public class App {

	@Autowired
	private TestDataSetup testDataSetup;

	@Autowired
	private Query query;


	@Autowired
	private Mutation mutation;

	public static void main(String[] args) {
		SpringApplication.run(App.class);
	}


	@Bean
	SchemaParser schemaParser() {
		return SchemaParser.newParser()
				.file("bloggie.graphql")
				.resolvers(query, mutation)
				.scalars(new GraphQLLocalDateTime())
				.build();
	}

	@Bean
	GraphQLSchema schema(SchemaParser parser) {
		return parser
				.makeExecutableSchema();

	}

	@PostConstruct
	public void createTestData() {
		testDataSetup.run();
	}
}
