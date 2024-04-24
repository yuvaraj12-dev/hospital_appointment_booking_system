import React from 'react';

export default class DoctorView extends React.Component{

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
                             <h1 class="fw-bold fst-italic text-center text-dark">View Doctor</h1>
                             <div class="form-group text-end py-2">
                                <a class="btn btn-outline-danger" href="/doctor">Back</a>
                             </div>
                             {this.state.list.map(value =>
                             <div class="form-outline mb-4">
                                   <h6 class="form-label position"><b>Name : </b></h6>
                                   <input class="form-control input-lg" type="text" value={value.name} disabled/><br/>
                                   <h6 class="form-label position"><b>Address : </b></h6>
                                   <input class="form-control input-lg" type="text" value={value.address} disabled/><br/>
                                   <h6 class="form-label position"><b>Mobile No : </b></h6>
                                   <input class="form-control input-lg" type="text" value={value.mobileNo} disabled/><br/>
                                   <h6 class="form-label position"><b>Email : </b></h6>
                                   <input class="form-control input-lg" type="text" value={value.email} disabled/><br/>
                                   <h6 class="form-label position"><b>Age : </b></h6>
                                   <input class="form-control input-lg" type="text" value={value.age} disabled/><br/>
                             </div>
                             )}
                         </div>
                     </div>
                </div>
            </>
        )
    }
}