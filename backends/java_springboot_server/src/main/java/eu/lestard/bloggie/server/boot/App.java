package eu.lestard.bloggie.server.boot;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class App {

	@Autowired
	private TestDataSetup testDataSetup;

	public static void main(String[] args) {
		SpringApplication.run(App.class);
	}

	@PostConstruct
	public void createTestData() {
		testDataSetup.run();
	}
}
