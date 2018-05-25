import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Middleware} from '../../store/middlewares/middlewares';
import './style.css';

class ParkingSlots extends Component{
    componentDidMount(){
        this.props.getParkingSlotsAdmin(this.props.selectedParking)
    }
    componentDidUpdate(){
        console.log("slots",this.props.parkingSlots)
    }
    renderSlots(){
        return this.props.parkingSlots.map((x,y) => {
            return(
                <li key={y}>
                    <h5>Slot # {x}</h5>
                </li>
            )
        })
    }
    render(){
        return(
            <div>
                <ul className="slots">
                    {this.renderSlots()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.AuthReducer.user,
        selectedParking: state.AdminReducer.selectedParking,
        parkingSlots: state.AdminReducer.parkingSlots
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getParkingSlotsAdmin: (parkingArea) => {
            return dispatch(Middleware.getParkingSlotsAdmin(parkingArea))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkingSlots)