<<<<<<< HEAD
import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../Home/home.css';

class DonorList extends Component{
    render(){
        return(
            <div>
                <div>
                    <ul className="boxes">
                        {this.props.donors.filter((x) => {
                            switch(this.props.bloodGroup){
                                    case 'A+':
                                        return(x.blood === 'A+' || x.blood === 'A-' || x.blood === 'O+' || x.blood === 'O-');
                                    case 'A-':
                                        return(x.blood === 'A-' || x.blood === 'O-');
                                    case 'B+':
                                        return(x.blood === 'B+' || x.blood === 'B-' || x.blood === 'O+' || x.blood === 'O-');
                                    case 'B-':
                                        return(x.blood === 'B-' || x.blood === 'O-');
                                    case 'AB+':
                                        return x;
                                    case 'AB-':
                                        return(x.blood === 'AB-' || x.blood === 'A-' || x.blood === 'B-' || x.blood === 'O-');
                                    case 'O+':
                                        return(x.blood === 'O+' || x.blood === 'O-');
                                    case 'O-':
                                        return(x.blood === 'O-');
                                    default:
                                        return x;
                                }
                            }).map((x) => {
                                return(
                                    <li className="donor">
                                        <h3>{x.name}</h3>
                                        <h4>{x.email}</h4>
                                        <h4>Contact #: <em>{x.contact}</em></h4>
                                        <address>Address: <i>{x.address}</i></address>
                                        <h3>{x.blood}</h3>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        donors: state.DonorReducer
    }
}

=======
import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../Home/home.css';

class DonorList extends Component{
    render(){
        return(
            <div>
                <div>
                    <ul className="boxes">
                        {this.props.donors.filter((x) => {
                            switch(this.props.bloodGroup){
                                    case 'A+':
                                        return(x.blood === 'A+' || x.blood === 'A-' || x.blood === 'O+' || x.blood === 'O-');
                                    case 'A-':
                                        return(x.blood === 'A-' || x.blood === 'O-');
                                    case 'B+':
                                        return(x.blood === 'B+' || x.blood === 'B-' || x.blood === 'O+' || x.blood === 'O-');
                                    case 'B-':
                                        return(x.blood === 'B-' || x.blood === 'O-');
                                    case 'AB+':
                                        return x;
                                    case 'AB-':
                                        return(x.blood === 'AB-' || x.blood === 'A-' || x.blood === 'B-' || x.blood === 'O-');
                                    case 'O+':
                                        return(x.blood === 'O+' || x.blood === 'O-');
                                    case 'O-':
                                        return(x.blood === 'O-');
                                    default:
                                        return x;
                                }
                            }).map((x) => {
                                return(
                                    <li className="donor">
                                        <h3>{x.name}</h3>
                                        <h4>{x.email}</h4>
                                        <h4>Contact #: <em>{x.contact}</em></h4>
                                        <address>Address: <i>{x.address}</i></address>
                                        <h3>{x.blood}</h3>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        donors: state.DonorReducer
    }
}

>>>>>>> 30517cd8741ba6209f92cd5b3a3f6ad9ab3463c2
export default connect(mapStateToProps,null)(DonorList)