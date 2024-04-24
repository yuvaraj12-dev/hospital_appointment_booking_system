package com.example.react_springboot_backend.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private int age;

    private String address;

    private String mobileNo;

    @Temporal(TemporalType.TIMESTAMP)
    private String time;

    @Temporal(TemporalType.DATE)
    private String date;

    private boolean status;

    @ManyToOne
    @JsonIgnore
    private Doctor doctor;
}
