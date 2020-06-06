package com.example.demo.Models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private final String type = "Osoba fizyczna";

    private String name;
    private String lastName;
    private String pesel;
    private String email;
    private String phoneNumber;
    private String additionalInformations;

    @OneToMany
    private List<Address> addresses;

    @OneToOne
    private Obtaining obtaining;

    public Person(String name, String lastName, String pesel, String email, String phoneNumber, String additionalInformations, List<Address> addresses, Obtaining obtaining) {
        this.name = name;
        this.lastName = lastName;
        this.pesel = pesel;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.additionalInformations = additionalInformations;
        this.addresses = addresses;
        this.obtaining = obtaining;
    }
}

