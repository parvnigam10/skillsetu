package com.parvnigam.skillsetu;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableJpaRepositories(considerNestedRepositories=true)
@EnableAsync
public class SkillSetuApplication {

	public static void main(String[] args) {
		SpringApplication.run(SkillSetuApplication.class, args);
	}

}
