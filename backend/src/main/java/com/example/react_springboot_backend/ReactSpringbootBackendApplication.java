package com.example.react_springboot_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration;

@SpringBootApplication(exclude = {UserDetailsServiceAutoConfiguration.class})
public class ReactSpringbootBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReactSpringbootBackendApplication.class, args);
	}

}
