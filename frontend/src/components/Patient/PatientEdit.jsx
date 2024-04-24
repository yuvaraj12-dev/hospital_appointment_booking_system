import React from 'react';

export default class PatientEdit extends React.Component {

     constructor(props){
         super(props);
         this.state = {
             list : this.props.val,
             id : '',
             name : '',
             address : '',
             mobileNo : '',
             age : '',
             date : '',
             time : ''

         }
     }

     onChange = (event) => {
         this.setState({[event.target.name] : event.target.value});
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
                date : value.date,
                time : value.time
            })
        )}
     }

     handleCancel = () => {
        this.setState({name : '',mobileNo : '',age : '',address :'',date : '',time : ''})
     }

     onUpdate = (event) => {
         event.preventDefault();
         fetch("/saveEditPatient/"+this.state.id,{
             method : "PUT",
             headers : new Headers({'content-type':'application/json'}),
             body:JSON.stringify({name : this.state.name, age : this.state.age, mobileNo : this.state.mobileNo, address : this.state.address, date : this.state.date, time : this.state.time}),
         })
     }

    render(){

        return(
            <>
                <div class="container py-4" style={{width: '50rem'}}>
                     <div class="card" >
                         <div class="card-body p-3">
                             <h1 class="fw-bold fst-italic text-center text-dark">Edit Appointment</h1>
                             <div class="form-group text-end py-2">
                                <a class="btn btn-outline-danger" href="/patient">Back</a>
                             </div>
                             <div class="form-outline mb-4">
                                 <div class="form-outline mb-4">
                                    <h6 class="form-label position"><b>Name : </b></h6>
                                    <input class="form-control input-lg" type="text" value={this.state.name} onChange={(e) => {this.setState({name : e.target.value})}}/><br/>
                                    {this.state.name}
                                    <h6 class="form-label position"><b>Address : </b></h6>
                                    <input class="form-control input-lg" type="text" value={this.state.address} onChange={(e) => {this.setState({address : e.target.value})}}/><br/>
                                    <h6 class="form-label position"><b>Mobile No : </b></h6>
                                    <input class="form-control input-lg" type="text" value={this.state.mobileNo} onChange={(e) => {this.setState({mobileNo : e.target.value})}}/><br/>
                                    <h6 class="form-label position"><b>Age : </b></h6>
                                    <input class="form-control input-lg" type="text" value={this.state.age} onChange={(e) => {this.setState({age : e.target.value})}}/><br/>
                                    <h6 class="form-label position"><b>Appointment Date : </b></h6>
                                    <input class="form-control input-lg" type="date" value={this.state.date} onChange={(e) => {this.setState({date : e.target.value})}}/><br/>
                                    <h6 class="form-label position"><b>Appointment Time : </b></h6>
                                    <input class="form-control input-lg" type="time" value={this.state.time} onChange={(e) => {this.setState({time : e.target.value})}}/><br/>
                                    <div class="d-flex gap-1">
                                        <a style={{width : '50%'}} class="btn btn-outline-danger" href="/patient">Back</a>
                                        <button style={{width : '50%'}} class="btn btn-outline-primary" onClick={this.onUpdate}>update Appointment</button>
                                    </div>
                                </div>
                             </div>
                         </div>
                     </div>
                </div>
            </>
        )
    }
}