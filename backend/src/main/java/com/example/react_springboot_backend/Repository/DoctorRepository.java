package com.example.react_springboot_backend.Repository;

import com.example.react_springboot_backend.Model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DoctorRepository extends JpaRepository<Doctor,Long> {

    Optional<Doctor> findById(Long id);
}
