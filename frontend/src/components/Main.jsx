import React from 'react';
import PatientList from './Patient/PatientList';
import DoctorList from './Doctor/DoctorList';
import LoginPage from './LoginPage';
import PatientCreate from './Patient/PatientCreate';
import DoctorCreate from './Doctor/DoctorCreate';
import PatientView from './Patient/PatientView';
import PatientEdit from './Patient/PatientEdit';
import DoctorView from './Doctor/DoctorView';
import DoctorEdit from './Doctor/DoctorEdit';
import { Carousel } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : [],
            doctorValue : []
        }

    }

    render(){
        const onView = (id) => {
            this.state.value.push(id)
        }

        const doctorView = (id) => {
            this.state.doctorValue.push(id)
        }

        return(
            <div style={{height:'650px'}}>
                <nav class="navbar navbar-expand-sm bg-light">
                    <img class="navbar-brand" width="50" height="50" src="https://asset.brandfetch.io/idurvrxvnO/idzo_ThNkQ.jpeg"/>
                    <div class="collapse navbar-collapse justify-content-center">
                       <h2 class="fw-bold fst-italic" style={{textAlign : 'center'}}>Kauvery Hospital Appointment Booking System</h2>
                    </div>
                </nav>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" height="500"
                            src="https://www.kauveryhospital.com/khbackup/images/gallery/lightbox/Emergency-and-Urgent-Care-Centre-1.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" height="500"
                            src="https://www.kauveryhospital.com/images/gallery/lightbox/gallery_6.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" height="500"
                            src="https://www.kauveryhospital.com/images/gallery/lightbox/gallery_9.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" height="500"
                            src="https://www.kauveryhospital.com/images/gallery/lightbox/gallery_4.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" height="500"
                            src="https://www.kauveryhospital.com/images/gallery/lightbox/gallery_8.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" height="500"
                            src="https://www.kauveryhospital.com/images/gallery/lightbox/gallery_5.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginPage/>} />
                        <Route path='/patient' element={<PatientList viewValue={onView}/>} />
                        <Route path='/patient/createPatient' element={<PatientCreate/>} />
                        <Route path='/patient/viewPatient/:id' element={<PatientView val={this.state.value}/>} />
                        <Route path='/patient/editPatient/:id' element={<PatientEdit val={this.state.value} />} />
                        <Route path='/doctor' element={<DoctorList viewDoctorValue={doctorView}/>} />
                        <Route path='/doctor/viewDoctor/:id' element={<DoctorView val={this.state.doctorValue}/>} />
                        <Route path='/doctor/editDoctor/:id' element={<DoctorEdit val={this.state.doctorValue}/>} />
                        <Route path='/doctor/createDoctor' element={<DoctorCreate/>}/>
                    </Routes>
                </Router>
                <br/><div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <footer class="text-center text-lg-start bg-light">
                    <div class="p-1">
                        <div class="row mt-4">
                            <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
                                <h5 class="text-uppercase mb-4 fw-bold fst-italic text-primary">KAUVERY HOSPITAL</h5>
                                <p>
                                    <b>With the 100% acquisition of a premier smart hospital, Kauvery Hospitals made a foray into Tamilnadu Healthcare establishing its branch in Mylapore, Chennai. The hospital with 150 bed plans to expand into a comprehensive healthcare giant with more branches across the state. Kauvery Hospitals’ is all set to become a world-class medical center committed to excellence in patient care and clinical research. Kauvery Hospital Mylapore is a facility with 200+ beds, more than 60+ doctors and 700 + employees. Kauvery Hospital Mylapore is also prepared and ready to see growing number of patients who trust its integrated and synergetic medical services.</b>
                                </p>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase mb-4 pb-1 fw-bold fst-italic text-primary">Kauvery Hospital Chennai</h5>
                                <h5>No.199, Luz Church Road</h5>
                                <h5>Mylapore,</h5>
                                <h5>Chennai,</h5>
                                <h5>Tamilnadu, India.</h5>
                                <h5>For Appointments:  04440006000</h5>
                                <h5>Contact :044 - 27429202,9000003412.</h5>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase mb-4 fw-bold fst-italic text-primary">Opening hours</h5>
                                <table class="table table-hover text-center text-white">
                                    <tbody class="fw-bold">
                                        <tr>
                                            <td>Monday - Friday : </td>
                                            <td>9 Am - 9 Pm</td>
                                        </tr>
                                        <tr>
                                            <td>Saturday : </td>
                                            <td>24 hours</td>
                                        </tr>
                                        <tr>
                                            <td>Sunday : </td>
                                            <td>24 hours</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a type="button" class="btn btn-floating btn-outline-danger btn-lg"><i class="fa fa-facebook"></i></a>&nbsp;
                        <a type="button" class="btn btn-floating btn-outline-danger btn-lg"><i class="fa fa-linkedin"></i></a>&nbsp;
                        <a type="button" class="btn btn-floating btn-outline-danger btn-lg"><i class="fa fa-twitter"></i></a>&nbsp;
                        <a type="button" class="btn btn-floating btn-outline-danger btn-lg"><i class="fa fa-google"></i></a>
                    </div><br/>
                    <div class="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                        © 2021 Copyright:&nbsp;
                        <a class="text-black text-decoration-none fw-bold fst-italic text-center text-dark" href="https://www.kauveryhospitalsbangalore.com/">kauveryhospital.com</a>
                    </div>
                  </footer>
                </div>
            </div>
        )
    }
}