<<<<<<< HEAD
import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../Home/home.css';

class DonorList extends Component{
    render(){
        return(
            <div>
                <div className="donors-list">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact #</th>
                            <th>Address</th>
                            <th>Blood Group</th>
                        </tr>
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
                            }).map((x,y) => {
                                return(<tr>
                                    <td>{x.name}</td>
                                    <td>{x.email}</td>
                                    <td>{x.contact}</td>
                                    <td>{x.address}</td>
                                    <td>{x.blood}</td>
                                </tr>)    
                            })}
                    </table>
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
                <div className="donors-list">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact #</th>
                            <th>Address</th>
                            <th>Blood Group</th>
                        </tr>
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
                            }).map((x,y) => {
                                return(<tr>
                                    <td>{x.name}</td>
                                    <td>{x.email}</td>
                                    <td>{x.contact}</td>
                                    <td>{x.address}</td>
                                    <td>{x.blood}</td>
                                </tr>)    
                            })}
                    </table>
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