import React from 'react';

export default class DoctorEdit extends React.Component{

    constructor(props){
         super(props);
         this.state = {
             list : this.props.val,
             id : '',
             name : '',
             address : '',
             mobileNo : '',
             age : '',
             email : '',
         }
    }

    componentDidMount() {
        this.onchangeState();
    }

    onchangeState = () => {
        {this.state.list.map(value =>
            this.setState({
                id : value.id,
                name : value.name,
                address : value.address,
                age : value.age,
                mobileNo : value.mobileNo,
                email : value.email
            })
        )}
    }

    onUpdate = (event) => {
         event.preventDefault();
         fetch("/saveEditDoctor/"+this.state.id,{
             method : "PUT",
             headers : new Headers({'content-type':'application/json'}),
             body:JSON.stringify({name : this.state.name, age : this.state.age, mobileNo : this.state.mobileNo, address : this.state.address,email : this.state.email}),
         })
     }

    render(){
        return(
            <div class="container py-4" style={{width: '50rem'}}>
                 <div class="card" >
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
                             <button class="btn btn-outline-primary" style={{width : '100%'}} onClick={this.onUpdate}>Edit Doctor</button>
                          </div>
                     </div>
                 </div>
            </div>
        )
    }
}