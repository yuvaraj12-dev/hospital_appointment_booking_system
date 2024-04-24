package com.example.react_springboot_backend.Controller;

import com.example.react_springboot_backend.Model.Doctor;
import com.example.react_springboot_backend.Model.Patient;
import com.example.react_springboot_backend.Repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
public class DoctorController {

    @Autowired
    private DoctorRepository doctorRepository;

    @GetMapping("/listAllDoctors")
    private List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    @PostMapping("/createDoctor")
    public Map<String,Object> setList(@RequestBody Map<String,Object> body) throws InterruptedException{
        Map<String,Object> result = new HashMap<>();
        String name = body.get("name").toString();
        String mobileNo = body.get("mobileNo").toString();
        String age = body.get("age").toString();
        String address = body.get("address").toString();
        String email = body.get("email").toString();

        Doctor doctor = new Doctor();
        doctor.setName(name);
        doctor.setAge(age);
        doctor.setAddress(address);
        doctor.setEmail(email);
        doctor.setMobileNo(mobileNo);

        doctorRepository.save(doctor);
        result.put("name",name);
        result.put("mobileNo",mobileNo);
        result.put("age",age);
        result.put("address",address);
        result.put("email",email);
        return result;
    }

    @GetMapping("/deleteDoctor/{id}")
    private List<Doctor> deleteUser (@PathVariable("id") Long id) throws InterruptedException {
        doctorRepository.deleteById(id);
        return doctorRepository.findAll();
    }

    @PutMapping("/saveEditDoctor/{id}")
    private Doctor savaEditPatient(@PathVariable("id") Long id, @RequestBody Map<String,Object> body) throws InterruptedException{

        String name = body.get("name").toString();
        String mobileNo = body.get("mobileNo").toString();
        String age = body.get("age").toString();
        String address = body.get("address").toString();
        String email = body.get("email").toString();

        Doctor doctor = doctorRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("exception" + id));
        doctor.setId(id);
        doctor.setName(name);
        doctor.setMobileNo(mobileNo);
        doctor.setAddress(address);
        doctor.setEmail(email);
        doctor.setAge(age);
        doctorRepository.save(doctor);

        return doctor;
    }
}
