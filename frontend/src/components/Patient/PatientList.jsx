import React from 'react';
import PatientCreate from './PatientCreate';
import { Link } from 'react-router-dom';

export default class PatientList extends React.Component {

    constructor(props){
        super(props);
        this.state={
            listData : [],
            showCompleted  :  '',
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
        const { currentPage, itemsPerPage, listData } = this.state;
        const totalPages = Math.ceil(listData.length / itemsPerPage);

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
        const url = await fetch('/listData');
        const response = await url.json();
        this.setState({listData : response})
    }

    handleClick = () => {
        this.setState({
            createButton : false
        })
    }

    removeButton = (id) => {
        fetch('/deleteUser/'+id)
            .then((response) => response.json())
                .then((result) => this.setState({listData : result}))
    }
    //test
    //test
    toggleCompleted = (index,id) => {
        const updatedTasks = [...this.state.listData];
        updatedTasks[index].status = !updatedTasks[index].status;
        this.setState({ listData: updatedTasks });
        console.log(this.state.listData)
        fetch("/editStatus/"+id,{
             method : "PUT",
             headers : new Headers({'content-type':'application/json'}),
             body:JSON.stringify({status : !updatedTasks[index].status}),
        })
    };


    handleStatusUpdate = (itemId) => {
        const updatedItems = this.state.listData.map((item) =>
            item.id === itemId ? { ...item, status: !item.status } : item
        );
        fetch(`/editStatus/${itemId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: !this.state.listData.find((item) => item.id === itemId).status }),
        });

        this.setState({ listData: updatedItems });
    };

    render() {
        const { listData, currentPage, itemsPerPage } = this.state;
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        let currentItems = listData.slice(indexOfFirstItem, indexOfLastItem);
        let a = listData.slice(indexOfFirstItem, indexOfLastItem);
        if(this.state.showCompleted === 'showAllTask'){
            currentItems = listData.slice(indexOfFirstItem, indexOfLastItem);
        } else if(this.state.showCompleted === 'completedTask'){
            currentItems = listData.slice(indexOfFirstItem, indexOfLastItem).filter((task) => task.status === true);
        } else if(this.state.showCompleted === 'pendingTask'){
            currentItems = listData.slice(indexOfFirstItem, indexOfLastItem).filter((task) => task.status === false);
        }

        return(
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                {this.state.createButton ?
                    <div>
                        <div class="col-xs py-2 col-md col-sm  col-lg center-block">
                             <h1 class="fw-bold fst-italic text-center text-dark">Patient List<span class="pull-right">
                             <a class="btn btn-outline-danger" href="/">LogOut</a></span></h1>
                        </div>
                        <div class="col-md-12 text-center">
                            <button class="btn btn-outline-success" onClick={() => this.setState({showCompleted : 'showAllTask'})}>Show All Appointment</button>&emsp;
                            <button class="btn btn-outline-primary" onClick={() => this.setState({showCompleted : 'completedTask'})}>Completed Appointment</button>&emsp;
                            <button class="btn btn-outline-danger" onClick={() => this.setState({showCompleted : 'pendingTask'})}>Pending Appointment</button>&emsp;
                        </div><br/>
                        <table class="table  table-hover">
                            <thead class="table-dark">
                                <tr>
                                    <th>Id</th>
                                    <th>Status</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Age</th>
                                    <th>MobileNo</th>
                                    <th>Appointment Time</th>
                                    <th>Appointment Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map(value =>
                                    <tr>
                                        <td>{value.id}</td>
                                        <td>
                                            <input type="checkbox" class="form-check-input" checked={value.status} onChange={() => this.handleStatusUpdate(value.id)} disabled={value.status === true}/>&nbsp;
                                        </td>
                                        <td>{value.name}</td>
                                        <td>{value.address}</td>
                                        <td>{value.age}</td>
                                        <td>{value.mobileNo}</td>
                                        <td>{value.time}</td>
                                        <td>{value.date}</td>
                                        <td>
                                            <Link to={`/patient/viewPatient/${value.id}`}>
                                                <button class="btn btn-outline-primary" onClick = {() =>{this.props.viewValue(value)}}><i class='fa fa-eye'></i></button>
                                            </Link>&nbsp;
                                            <Link to={`/patient/editPatient/${value.id}`}>
                                                <button class="btn btn-outline-secondary" onClick = {() =>{this.props.viewValue(value)}}><i class='fa fa-edit'></i></button>
                                            </Link>&nbsp;
                                            <button class="btn btn-outline-danger" onClick = {() => this.removeButton(value.id)}><i class="fa fa-remove"></i></button>

                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <div class="text-center">
                            <a href="/patient/createPatient" class="btn btn-outline-primary" onClick = {this.handleClick}>Create New Appointment</a>
                            <button class="btn btn-outline-secondary float-start" onClick={this.handlePrev} disabled={currentPage === 1}><i class="fa fa-arrow-circle-left"></i> Previous</button>
                            <button class="btn btn-outline-primary float-end" name="nextbtn" onClick={this.handleNext} disabled={currentPage === Math.ceil(listData.length / itemsPerPage)}>Next <i class="fa fa-arrow-circle-right"></i></button>
                        </div>
                        </div>
                    :
                     <PatientCreate/>
                }
            </div>
        );
    }
}