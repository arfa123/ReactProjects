import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Middleware} from '../../store/middlewares/middlewares';
import './style.css';

class GetSlots extends Component{
    componentWillMount(){
        this.props.getParkingSlots(this.props.selectedParking)
    }
    renderSlots(){
        console.log("slots:",this.props.parkingSlots)
        return this.props.parkingSlots.map((x,y) => {
            if(x.bookings !== undefined){
                let bookings = Object.values(x.bookings)
                let availablity = bookings.map((booking,key) => {
                    if(booking.date.date === this.props.selectedDate.date){
                        console.log("her:",booking.date,this.props.selectedDate)
                        let bookedStartTime = booking.date.startTime
                        let bookedEndTime = booking.date.endTime
                        let startTime = this.props.selectedDate.startTime
                        let endTime = this.props.selectedDate.endTime
                        if(endTime < bookedStartTime || startTime > bookedEndTime){
                            return true
                        }
                        else{
                            return false
                        }
                    }
                    else{
                        return true
                    }
                })
                let isAvailable = availablity.indexOf(false)
                if(isAvailable === -1){
                    return(
                        <li onClick={() => this.parkingBooked(this.props.selectedParking,x.slotno)}>
                            <h5>Slot # {x.slotno}</h5>
                        </li>
                    )
                }
                else{
                    return(
                        <li style={{backgroundColor: 'yellow', color: 'red'}}>
                            <h5>Slot # {x.slotno}</h5>
                        </li>
                    )
                }
            }
            return(
                <li onClick={() => this.parkingBooked(this.props.selectedParking,x.slotno)}>
                    <h5>Slot # {x.slotno}</h5>
                </li>
            )
        })
    }
    parkingBooked(parkingName,slotno){
        this.props.parkingBooked(parkingName,slotno,this.props.user,this.props.selectedDate)
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
        selectedParking: state.UserReducer.selectedParking,
        selectedDate: state.UserReducer.selectedDate,
        parkingSlots: state.UserReducer.parkingSlots
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getParkingSlots: (parking) => {
            return dispatch(Middleware.getParkingSlots(parking))
        },
        parkingBooked: (parkingName, slotno, user, date) => {
            return dispatch(Middleware.parkingBooked(parkingName,slotno,user,date))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetSlots)