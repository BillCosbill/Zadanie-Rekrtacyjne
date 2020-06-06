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
public class Firm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private final String type = "Firma";

    private String name;
    private String nip;
    private String regon;
    private String krs;
    private String legalForm;
    private String phoneNumber;
    private String email;
    private String additionalInformations;

    @OneToMany
    private List<Address> addresses;

    @ManyToOne
    private Obtaining obtaining;

    @OneToMany
    private List<Worker> workers;

    public Firm(String name, String nip, String regon, String krs, String legalForm, String phoneNumber, String email, String additionalInformations, List<Address> addresses,
                Obtaining obtaining, List<Worker> workers) {
        this.name = name;
        this.nip = nip;
        this.regon = regon;
        this.krs = krs;
        this.legalForm = legalForm;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.additionalInformations = additionalInformations;
        this.addresses = addresses;
        this.obtaining = obtaining;
        this.workers = workers;
    }

    public Firm(String name, String nip, String regon, String krs, String legalForm, String phoneNumber, String email, String additionalInformations, List<Address> addresses,
                Obtaining obtaining) {
        this.name = name;
        this.nip = nip;
        this.regon = regon;
        this.krs = krs;
        this.legalForm = legalForm;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.additionalInformations = additionalInformations;
        this.addresses = addresses;
        this.obtaining = obtaining;
    }
}
