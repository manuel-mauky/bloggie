package eu.lestard.bloggie.server.boot;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.coxautodev.graphql.tools.SchemaParser;

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
		return SchemaParser.newParser()
				.file("bloggie.graphql")
				.build()
				.makeExecutableSchema();

	}

	@PostConstruct
	public void createTestData() {
		testDataSetup.run();
	}
}
