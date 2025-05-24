package com.illizen.tutorials.sample_crm;

import static org.springframework.security.config.Customizer.withDefaults;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import lombok.extern.slf4j.Slf4j;

/**
 * Spring Security config
 * <p>
 * See:
 * https://spring.io/blog/2022/02/21/spring-security-without-the-websecurityconfigureradapter
 */
@Configuration
@EnableWebSecurity
@SecurityScheme(name = "basicAuth", type = SecuritySchemeType.HTTP, scheme = "basic")
@Slf4j
public class SecurityConfig {

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        log.warn(
                "H2 database console is unsecured for development purposes. THIS CONFIGURATION SHOULD NOT MAKE IT INTO A QA OR PROD ENVIRONMENT!!!");
        // @formatter:off
        return http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> {
                    auth.requestMatchers("/", "/status", "/v3/api-docs/**").permitAll();
                    auth.requestMatchers("/actuator/**", "/admin/**", "/swagger-ui/**").hasAnyRole("ADMIN");
                    auth.anyRequest().authenticated();
                })
                .httpBasic(withDefaults())
                // See: https://www.baeldung.com/spring-cors
                // H2 console required frameOptions be disabled, see: https://springframework.guru/using-the-h2-database-console-in-spring-boot-with-spring-security/
                .cors(cors -> cors.configurationSource(withLocalAllowedCorsConfig()))
                .headers(headers -> {
                    headers.frameOptions(frameOptions -> {
                        frameOptions.disable();
                    });
                })
                // .exceptionHandling(exceptionHandling -> {
                    // exceptionHandling.accessDeniedPage("/accessDenied.html");
                // })
                .build();
        // @formatter:on
    }

    @Bean
    InMemoryUserDetailsManager inMemoryUserDetailsManager() {
        log.warn(
                "NoOp password encoder is being used with in memory authentication. THIS CONFIGURATION SHOULD NOT MAKE IT INTO A QA OR PROD ENVIRONMENT!!!");
        // @formatter:off
        var user = User.builder()
                        .username("user")
                        .password("{noop}user")
                        .roles("USER")
                        .build();
        var admin = User.builder()
                        .username("admin")
                        .password("{noop}admin")
                        .roles("USER", "ADMIN")
                        .build();
        // @formatter:on
        return new InMemoryUserDetailsManager(user, admin);
    }

    // See: https://www.baeldung.com/spring-cors#cors-with-spring-security
    @Bean
    CorsConfigurationSource withLocalAllowedCorsConfig() {
        log.warn(
                "CORS has been enabled for local development with Reat at ports 3000 and 5173. THIS CONFIGURATION SHOULD NOT MAKE IT INTO A QA OR PROD ENVIRONMENT!!!");
        var configuration = new CorsConfiguration();
        configuration.setAllowCredentials(true);
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000", "http://localhost:5173"));
        configuration.addAllowedHeader("*");
        configuration.addAllowedMethod("*");
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

}