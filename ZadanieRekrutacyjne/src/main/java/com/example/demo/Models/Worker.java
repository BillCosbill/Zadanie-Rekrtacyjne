package com.example.demo.Models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Worker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String lastName;
    private String position;
    private String phoneNumber;
    private boolean status;

    public Worker(String name, String lastName, String position, String phoneNumber) {
        this.name = name;
        this.lastName = lastName;
        this.position = position;
        this.phoneNumber = phoneNumber;
        this.status = true;
    }
}
