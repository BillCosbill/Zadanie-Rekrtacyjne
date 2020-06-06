package com.example.demo.Models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Obtaining {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String obtainingWay;

    private String details;

    public Obtaining(String obtainingWay, String details) {
        this.obtainingWay = obtainingWay;
        this.details = details;
    }

    public Obtaining(String obtainingWay) {
        this.obtainingWay = obtainingWay;
    }
}
