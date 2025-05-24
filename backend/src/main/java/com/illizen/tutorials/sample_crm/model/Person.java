package com.illizen.tutorials.sample_crm.model;

import com.illizen.tutorials.sample_crm.model.base.AbstractEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@Data
@EqualsAndHashCode(callSuper = true)
public class Person extends AbstractEntity {

    @NotBlank
    private String firstName;

    @NotBlank
    private String lastName;

    private String email;
    private String phoneNumber;

    // @OneToMany(mappedBy = "mailingAddress", cascade = CascadeType.ALL,
    // orphanRemoval = true)
    @OneToOne // (mappedBy = "mailingAddress", cascade = CascadeType.ALL, orphanRemoval =
              // true)
    @JoinColumn(name = "mailingAddress")
    private Address mailingAddress;

    @OneToOne // (mappedBy = "mailingAddress", cascade = CascadeType.ALL, orphanRemoval =
              // true)
    @JoinColumn(name = "physicalAddress")
    private Address physicalAddress;

}
