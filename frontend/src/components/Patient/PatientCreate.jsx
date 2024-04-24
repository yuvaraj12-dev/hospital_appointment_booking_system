import React from 'react';
import { Navigate } from 'react-router-dom';

export default class PatientCreate extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name : '',
            address : '',
            mobileNo : '',
            age : '',
            date : '',
            time : '',
            listAllDoctor : [],
            doctor : '',
            nameError : '',
            addressError : '',
            mobileNoError : '',
            ageError : '',
            dateError : '',
            timeError : '',
            doctorError : '',
            showStatus : false
        }
    }

    componentDidMount(){
        this.listData();
    }

    handleCancel = () => {
        this.setState({name : '',mobileNo : '',age : '',address :'',date : '',time : ''})
    }

    listData = async () => {
        const url = await fetch('/listAllDoctors');
        const response = await url.json();
        console.log(response);
        this.setState({listAllDoctor : response})
    }

    bookAppointment = () => {
        const nameField = new  RegExp('^[a-zA-Z\\s]{3,}$');
        const mobileNumber = new RegExp('^[0-9]{10}$');
        const addressFormat = new RegExp('^[a-zA-Z\\s.,&0-9]{3,}$');
        if (nameField.test(this.state.name) && mobileNumber.test(this.state.mobileNo)
            &&  addressFormat.test(this.state.address) && this.state.age !== '' && this.state.doctor !== ''
            && this.state.time !== '' && this.state.date !== ''){
            fetch('/createUser',{
                method : "POST",
                headers : new Headers({'content-type':'application/json'}),
                body : JSON.stringify({name: this.state.name,mobileNo : this.state.mobileNo,age : this.state.age,address : this.state.address,date : this.state.date,time : this.state.time,doctor : this.state.doctor,showStatus : this.state.showStatus}),
            })
            this.setState({name : '',mobileNo : '',age : '',address :'',date : '',time : '',doctor : ''})
        } else {
            this.setState({
                nameError : this.state.name === '' ? "*.Given Field is Required" : (nameField.test(this.state.name) ? '' : 'Given Name is Invalid Format'),
                mobileNoError : this.state.mobileNo === '' ? "*.Given Field is Required" : (mobileNumber.test(this.state.mobileNo) ? '' : 'Mobile Number Should Be Accept only 10 Digits'),
                addressError : this.state.address === '' ? '*.Given Field is Required' :  (addressFormat.test(this.state.address) ? '' : 'Given Address is Invalid Format'),
                ageError : '*.Given Field is Required',
                doctorError : '*.Given Field is Required',
                timeError : '*.Given Field is Required',
                dateError : '*.Given Field is Required'
            })
        }
    }

    render(){
        return(
            <>
                <div class="container py-4" style={{width: '50rem'}}>
                     <div class="card" >
                         <div class="card-body p-3">
                             <h1 class="fw-bold fst-italic text-center text-dark">Book Appointment</h1>
                             <div class="form-group text-end py-2">
                                <a class="btn btn-outline-danger" href="/patient">Back</a>
                             </div>
                             <div class="form-outline mb-4">
                                  <h6 class="form-label position"><b>Name : </b></h6>
                                  <input class="form-control input-lg" type="text" value={this.state.name} onChange={(e) => {this.setState({name : e.target.value})}}/><br/>
                                  <h6 class="form-label text-center text-danger"><b>{this.state.nameError}</b></h6>
                                  <h6 class="form-label position"><b>Address : </b></h6>
                                  <input class="form-control input-lg" type="text" value={this.state.address} onChange={(e) => {this.setState({address : e.target.value})}}/><br/>
                                  <h6 class="form-label text-center text-danger"><b>{this.state.addressError}</b></h6>
                                  <h6 class="form-label position"><b>Mobile No : </b></h6>
                                  <input class="form-control input-lg" type="text" value={this.state.mobileNo} onChange={(e) => {this.setState({mobileNo : e.target.value})}}/><br/>
                                  <h6 class="form-label text-center text-danger"><b>{this.state.mobileNoError}</b></h6>
                                  <h6 class="form-label position"><b>Age : </b></h6>
                                  <input class="form-control input-lg" type="text" value={this.state.age} onChange={(e) => {this.setState({age : e.target.value})}}/><br/>
                                  <h6 class="form-label text-center text-danger"><b>{this.state.ageError}</b></h6>
                                  <h6 class="form-label position"><b>Appointment Date : </b></h6>
                                  <input class="form-control input-lg" type="date" value={this.state.date} onChange={(e) => {this.setState({date : e.target.value})}}/><br/>
                                  <h6 class="form-label text-center text-danger"><b>{this.state.dateError}</b></h6>
                                  <h6 class="form-label position"><b>Appointment Time : </b></h6>
                                  <input class="form-control input-lg" type="time" value={this.state.time} onChange={(e) => {this.setState({time : e.target.value})}}/><br/>
                                  <h6 class="form-label text-center text-danger"><b>{this.state.timeError}</b></h6>
                                  <h6 class="form-label position"><b>Doctor : </b></h6>
                                  <select class="form-select" value={this.state.doctor}  onChange = {(event) => this.setState({doctor : event.target.value})}>
                                      <option></option>
                                      {this.state.listAllDoctor.map(data =>
                                          <option value={data.id}>{data.name}</option>
                                      )}
                                  </select><br/>
                                  <h6 class="form-label text-center text-danger"><b>{this.state.doctorError}</b></h6>
                                  <div class="d-flex gap-1">
                                      <button style={{width : '50%'}} class="btn btn-outline-primary" onClick={this.bookAppointment}>Book Appointment</button>
                                      <button style={{width : '50%'}} class="btn btn-outline-danger" onClick={this.handleCancel}>cancel</button>
                                  </div>
                             </div>
                         </div>
                     </div>
                </div>
            </>
        );
    }
}