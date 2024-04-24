package com.example.react_springboot_backend.Controller;

import com.example.react_springboot_backend.Model.Doctor;
import com.example.react_springboot_backend.Model.Patient;
import com.example.react_springboot_backend.Repository.DoctorRepository;
import com.example.react_springboot_backend.Repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private DoctorRepository doctorRepository;

    @GetMapping("/listData")
    private List<Patient> getDemos() {
        return patientRepository.findAll();
    }

    @PostMapping("/createUser")
    public Map<String,Object> setList(@RequestBody Map<String,Object> body) throws InterruptedException{
        Map<String,Object> result = new HashMap<>();
        String name = body.get("name").toString();
        String mobileNo = body.get("mobileNo").toString();
        String age = body.get("age").toString();
        String address = body.get("address").toString();
        String date = body.get("date").toString();
        String time = body.get("time").toString();
        String doctor1 = body.get("doctor").toString();

        Optional<Doctor> doctor = doctorRepository.findById(Long.valueOf(doctor1));
        Patient patient = new Patient();
        patient.setName(name);
        patient.setAge(Integer.parseInt(age));
        patient.setAddress(address);
        patient.setMobileNo(mobileNo);
        patient.setDate(date);
        patient.setTime(time);
        patient.setStatus(false);
        patient.setDoctor(doctor.get());


        patientRepository.save(patient);
        result.put("name",name);
        result.put("mobileNo",mobileNo);
        result.put("age",age);
        result.put("address",address);
        result.put("date",date);
        result.put("time",time);
        return result;
    }

    @GetMapping("/deleteUser/{id}")
    private List<Patient> deleteUser (@PathVariable("id") Long id) throws InterruptedException {
        patientRepository.deleteById(id);
        return patientRepository.findAll();
    }

    @GetMapping("/viewPatient/{id}")
    private Patient editUser(@PathVariable("id") Long id) throws InterruptedException{
        return patientRepository.findById(id).orElseThrow(null);
    }

    @PutMapping("/saveEditPatient/{id}")
    private Patient savaEditPatient(@PathVariable("id") Long id,@RequestBody Map<String,Object> body) throws InterruptedException{

        String name = body.get("name").toString();
        String mobileNo = body.get("mobileNo").toString();
        String age = body.get("age").toString();
        String address = body.get("address").toString();
        String date = body.get("date").toString();
        String time = body.get("time").toString();

        Patient patient = patientRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("exception" + id));
        patient.setId(id);
        patient.setName(name);
        patient.setMobileNo(mobileNo);
        patient.setAddress(address);
        patient.setTime(time);
        patient.setDate(date);
        patient.setAge(Integer.parseInt(age));
        patientRepository.save(patient);

        return patient;
    }

    @PutMapping("/editStatus/{id}")
    private Patient EditStatusPatient(@PathVariable("id") Long id,@RequestBody Map<String,Object> body) throws InterruptedException {

        boolean status = (boolean) body.get("status");

        Patient patient = patientRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("exception" + id));
        patient.setStatus(status);
        patientRepository.save(patient);
        return patient;

    }

}
