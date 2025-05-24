package com.illizen.tutorials.sample_crm.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.illizen.tutorials.sample_crm.model.Person;
import com.illizen.tutorials.sample_crm.repository.PersonRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@RequiredArgsConstructor
@Log4j2
public class PersonService {

    private final PersonRepository personRepository;

    public Person create(Person person) {
        log.info("Creating person: {}", person);
        return personRepository.save(person);
    }

    public List<Person> read() {
        log.info("Reading all persons");
        return personRepository.findAll();
    }

    public Person read(Long id) {
        log.info("Reading person with id: {}", id);
        return personRepository.findById(id).orElseThrow(() -> new RuntimeException("Person not found for id: " + id));
    }

    public Person update(Person person) {
        log.info("Updating person: {}", person);
        return personRepository.save(person);
    }

    public boolean delete(Long id) {
        log.info("Deleting person with id: {}", id);
        personRepository.deleteById(id);
        return true;
    }

}
