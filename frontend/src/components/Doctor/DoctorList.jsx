import React from 'react';
import DoctorCreate from './DoctorCreate';
import { Link } from 'react-router-dom';

export default class DoctorList extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            listAllDoctor : [],
            currentPage: 1,
            itemsPerPage: 5,
            createButton : true
        }
    }

    componentDidMount(){
        this.listData();
    }

    handleClick = (page) => {
            this.setState({ currentPage: page });
    };

    handleNext = () => {
        const { currentPage, itemsPerPage, listAllDoctor } = this.state;
        const totalPages = Math.ceil(listAllDoctor.length / itemsPerPage);

        if (currentPage < totalPages) {
            this.setState({ currentPage: currentPage + 1 });
        }
    };

    handlePrev = () => {
        const { currentPage } = this.state;

        if (currentPage > 1) {
          this.setState({ currentPage: currentPage - 1 });
        }
    };

    listData = async () => {
        const url = await fetch('/listAllDoctors');
        const response = await url.json();
        console.log(response);
        this.setState({listAllDoctor : response})
    }

    removeButton = (id) => {
        fetch('/deleteDoctor/'+id)
            .then((response) => response.json())
                .then((result) => this.setState({listAllDoctor : result}))
    }

    render(){
        const { listAllDoctor, currentPage, itemsPerPage } = this.state;
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = listAllDoctor.slice(indexOfFirstItem, indexOfLastItem);
        return(
            <div>
                {this.state.createButton ?
                    <div>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                        <div class="col-xs py-2 col-md col-sm  col-lg center-block">
                            <h1 class="fw-bold fst-italic text-center text-dark">Doctor List
                            <a class="btn btn-outline-danger float-end" href="/">LogOut</a></h1>
                        </div>
                        <table class="table table-hover">
                            <thead class="table-dark">
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Age</th>
                                    <th>MobileNo</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((value) =>
                                    <tr>
                                        <td>{value.id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.address}</td>
                                        <td>{value.age}</td>
                                        <td>{value.mobileNo}</td>
                                        <td>{value.email}</td>
                                        <td>
                                            <Link to={`/doctor/viewDoctor/${value.id}`}>
                                                <button class="btn btn-outline-primary" onClick = {() =>{this.props.viewDoctorValue(value)}}><i class='fa fa-eye'></i></button>
                                            </Link>&nbsp;
                                            <Link to={`/doctor/editDoctor/${value.id}`}>
                                                <button class="btn btn-outline-secondary" onClick = {() =>{this.props.viewDoctorValue(value)}}><i class='fa fa-edit'></i></button>
                                            </Link>&nbsp;
                                            <button class="btn btn-outline-danger" onClick = {() => this.removeButton(value.id)}><i class="fa fa-remove"></i></button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <div class="text-center">
                            <a href="/doctor/createDoctor" class="btn btn-outline-primary" onClick={() => {this.setState({createButton : false})}}>Create Doctor</a>
                            <button class="btn btn-outline-secondary float-start" onClick={this.handlePrev} disabled={currentPage === 1}><i class="fa fa-arrow-circle-left"></i> Previous</button>
                            <button class="btn btn-outline-primary float-end" name="nextbtn" onClick={this.handleNext} disabled={currentPage === Math.ceil(listAllDoctor.length / itemsPerPage)}>Next <i class="fa fa-arrow-circle-right"></i></button>
                        </div>
                    </div>
                    :
                    <DoctorCreate/>
                }
            </div>
        );
    }
}