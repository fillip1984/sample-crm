package com.illizen.tutorials.sample_crm;

import java.net.InetAddress;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationStartedEvent;
import org.springframework.context.event.EventListener;

import lombok.extern.log4j.Log4j2;

@SpringBootApplication
@Log4j2
public class SampleCrmApplication {

	@Value("${server.port}")
	private String serverPort;

	public static void main(String[] args) {
		SpringApplication.run(SampleCrmApplication.class, args);
	}

	/**
	 * Logs urls of interest on start up
	 * 
	 * @param event
	 */
	@EventListener
	void onApplicationEvent(ApplicationStartedEvent event) {
		try {
			var address = InetAddress.getLocalHost().getHostName();
			var addressBaseUrl = "http://" + address + ":" + serverPort;

			// TODO: in Java 21+ use string literals,
			// https://www.baeldung.com/java-21-string-templates#1-str-template-processor
			log.info("App server ready and waiting"
					+ "\n"
					+ "\n 		End points of interest:"
					+ "\n 					   home -> " + addressBaseUrl
					+ "\n 					 health -> " + addressBaseUrl + "/actuator/health"
					+ "\n 				Spring Actuator -> " + addressBaseUrl + "/actuator"
					+ "\n				     Swagger UI -> " + addressBaseUrl + "/swagger-ui/index.html"
					+ "\n 				    Swagger API -> " + addressBaseUrl + "/v3/api-docs"
					+ "\n"
					+ "\n");
		} catch (Exception e) {
			var msg = "Exception occurred while building url to display in console on startup";
			log.error(msg, e);
			throw new RuntimeException(msg, e);
		}
	}

}
