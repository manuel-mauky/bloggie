package eu.lestard.bloggie.server.boot;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import graphql.Scalars;
import graphql.schema.GraphQLObjectType;
import graphql.schema.GraphQLSchema;

@SpringBootApplication
public class App {

	@Autowired
	private TestDataSetup testDataSetup;

	public static void main(String[] args) {
		SpringApplication.run(App.class);
	}

	@Bean
	GraphQLSchema schema() {
		return GraphQLSchema.newSchema()
				.query(GraphQLObjectType.newObject()
						.name("query")
						.field(field -> field
								.name("test")
								.type(Scalars.GraphQLString)
								.dataFetcher(environment -> "hallo welt")
						)
						.build()
				).build();
	}

	@PostConstruct
	public void createTestData() {
		testDataSetup.run();
	}
}
