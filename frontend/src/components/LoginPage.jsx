import React from 'react';
import PatientList from './Patient/PatientList';
import DoctorList from './Doctor/DoctorList';

export default class LoginPage extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            patientList : [],
            userName : '',
            password : '',
            loginButton : false,
            buttonAction : false,
            status : false,
            values: '',
        }
    }

    componentDidMount(){
        this.listData();
    }

    listData = async () => {
        const url = await fetch('/listData');
        const response = await url.json();
        this.setState({patientList : response})
    }

    render(){
        const buttonFunction = (status) => {
            if(status === "Patient"){
                if(this.state.userName === 'patient' && this.state.password === '1234'){
                    this.setState({
                        values:'/patient'
                    })
                } else {
                    alert('Invalid credentials User Name is : patient & password is : 1234')
                }
            } else if(status === "Doctor"){
                if(this.state.userName === 'doctor' && this.state.password === '1234'){
                    this.setState({
                        values:'/doctor'
                    })
                } else {
                    alert('Invalid credentials User Name is : doctor & password is : 1234')
                }
            }
        }

        return(
        <div>
            {this.state.loginButton ?
                <>
                {this.state.status ? <PatientList/> : <DoctorList/>}
                </>
                :
                <div>
                
                    <div class="container py-5" style={{width: '30rem'}}>
                        <div class="card" >
                            <div class="card-body p-3">
                            <h1 class="text-center"><b>Login Portal</b></h1><br/>
                            <div class="d-flex gap-1">
                                <button style={{width : '50%'}} class="btn btn-outline-secondary" onClick={() => this.setState({buttonAction : false})}>Doctor Login</button><br/>
                                <button style={{width : '50%'}} class="btn btn-outline-primary" onClick={() => this.setState({buttonAction : true})}>Patient Login</button>
                            </div><br/>
                            <div class="form-outline mb-4">
                                <label class="form-label"><b>User Name : </b></label><br/>
                                <input class="form-control input-lg" type="text" value={this.state.userName} onChange={(e) => {this.setState({userName : e.target.value})}}/><br/>
                                <label class="form-label"><b>PassWord : </b></label><br/>
                                <input class="form-control input-lg" type="password" value={this.state.password} onChange={(e) => {this.setState({password : e.target.value})}}/>
                            </div>
                            <div class="d-grid gap-2 col-12 mx-auto">
                                <a href={this.state.values}  class="btn btn-outline-danger" onClick = {() => buttonFunction(this.state.buttonAction ? 'Patient' : 'Doctor')}>{this.state.buttonAction ? 'Patient' : 'Doctor'}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
        );
    }
}