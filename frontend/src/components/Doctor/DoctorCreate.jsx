import React from 'react';

export default class DoctorCreate extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name : '',
            address : '',
            mobileNo : '',
            age : '',
            email : '',
            nameError : '',
            ageError : '',
            mobileNoError : '',
            emailError : '',
            addressError : '',
            isLoad: false
        }
    }

    createDoctor = () => {
        const emailField = new RegExp('^[a-z0-9]+@[a-z0-9]+.com');
        const nameField = new  RegExp('^[a-zA-Z\\s]{3,}$');
        const mobileNumber = new RegExp('^[0-9]{10}$');
        const addressFormat = new RegExp('^[a-zA-Z\\s.,&0-9]{3,}$');
         this.setState({isLoad : true});
        if(nameField.test(this.state.name) && mobileNumber.test(this.state.mobileNo)
            && emailField.test(this.state.email) && this.state.age >= 26 && addressFormat.test(this.state.address)) {
            fetch('/createDoctor',{
                method : "POST",
                headers : new Headers({'content-type':'application/json'}),
                body : JSON.stringify({name: this.state.name,mobileNo : this.state.mobileNo,age : this.state.age,address : this.state.address,email : this.state.email,redirect : true}),
            })
            this.setState({
                name : '',
                mobileNo : '',
                age : '',
                address : '',
                email : '',
                nameError : '',
                addressError : '',
                ageError : '',
                emailError : '',
                mobileNo : '',
                mobileNoError : ''
            })
            setInterval(() => this.setState({isLoad: false}), 2000)
        } else {
            this.setState({
                nameError : this.state.name === '' ? "*.Given Field is Required" : (nameField.test(this.state.name) ? '' : 'Given Name is Invalid Format'),
                mobileNoError : this.state.mobileNo === '' ? "*.Given Field is Required" : (mobileNumber.test(this.state.mobileNo) ? '' : 'Mobile Number Should Be Accept only 10 Digits'),
                ageError : this.state.age === '' ? "*.Given Field is Required" : (this.state.age >= 26 ? '' : 'Age Should be Accept Only Above 26 years Only'),
                emailError : this.state.email === '' ? '*.Given Field is Required' :  (emailField.test(this.state.email) ? '' : 'Given Email is Invalid Format'),
                addressError : this.state.address === '' ? '*.Given Field is Required' :  (addressFormat.test(this.state.address) ? '' : 'Given Address is Invalid Format')
            })
        }
    }

    render(){
        return(
            <div class="container py-4" style={{width: '50rem'}}>
                 <div class="card" >
                 {this.state.isLoad &&
                     <div>
                         <div class="loader"></div>
                     </div>
                 }
                     <div class="card-body p-3">
                         <h1 class="fw-bold fst-italic text-center text-dark"><b>Create Doctor</b></h1>
                         <div class="form-group text-end py-2">
                            <a href="/doctor" class="btn btn-outline-danger">Back</a>
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
                              <h6 class="form-label position"><b>Email : </b></h6>
                              <input class="form-control input-lg" type="text" value={this.state.email} onChange={(e) => {this.setState({email : e.target.value})}}/><br/>
                              <h6 class="form-label text-center text-danger"><b>{this.state.emailError}</b></h6>
                              <h6 class="form-label position"><b>Age : </b></h6>
                              <input class="form-control input-lg" type="text" value={this.state.age} onChange={(e) => {this.setState({age : e.target.value})}}/><br/>
                              <h6 class="form-label text-center text-danger"><b>{this.state.ageError}</b></h6>
                             <button class="btn btn-outline-primary" style={{width : '100%'}} onClick={this.createDoctor}>Create Doctor</button>
                          </div>
                     </div>
                 </div>
            </div>
        );
    }
}