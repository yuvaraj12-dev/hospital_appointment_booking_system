package com.example.react_springboot_backend.Repository;

import com.example.react_springboot_backend.Model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, Long> {
}
