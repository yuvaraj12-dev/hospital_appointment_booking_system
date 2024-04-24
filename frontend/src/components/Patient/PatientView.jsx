import React from 'react';

export default class PatientView extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            list : this.props.val
        }
    }

    render(){
        return(
            <>
                <div class="container py-4" style={{width: '50rem'}}>
                     <div class="card" >
                         <div class="card-body p-3">
                             <h1 class="fw-bold fst-italic text-center text-dark">View Appointment</h1>
                             <div class="form-group text-end py-2">
                                <a class="btn btn-outline-danger" href="/patient">Back</a>
                             </div>
                             {this.state.list.map(value =>
                             <div class="form-outline mb-4">
                                  <h6 class="form-label position"><b>Name : </b></h6>
                                  <input class="form-control input-lg" type="text" value={value.name} disabled/><br/>
                                  <h6 class="form-label position"><b>Address : </b></h6>
                                  <input class="form-control input-lg" type="text" value={value.address} disabled/><br/>
                                  <h6 class="form-label position"><b>Mobile No : </b></h6>
                                  <input class="form-control input-lg" type="text" value={value.mobileNo} disabled/><br/>
                                  <h6 class="form-label position"><b>Age : </b></h6>
                                  <input class="form-control input-lg" type="text" value={value.age} disabled/><br/>
                                  <h6 class="form-label position"><b>Appointment Date : </b></h6>
                                  <input class="form-control input-lg" type="date" value={value.date} disabled/><br/>
                                  <h6 class="form-label position"><b>Appointment Time : </b></h6>
                                  <input class="form-control input-lg" type="time" value={value.time} disabled/><br/>
                             </div>
                             )}
                         </div>
                     </div>
                </div>
            </>
        )
    }
}