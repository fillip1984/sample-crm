package com.illizen.tutorials.sample_crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.illizen.tutorials.sample_crm.model.Person;

public interface PersonRepository extends JpaRepository<Person, Long> {

}
