package com.example.demo.Models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String addressType;
    private String street;
    private String houseNumber;
    private String apartmentNumber;
    private String zipCode;
    private String city;

    public Address(String addressType, String street, String houseNumber, String apartmentNumber, String zipCode, String city) {
        this.addressType = addressType;
        this.street = street;
        this.houseNumber = houseNumber;
        this.apartmentNumber = apartmentNumber;
        this.zipCode = zipCode;
        this.city = city;
    }
}
