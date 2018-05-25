import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Middleware} from '../../store/middlewares/middlewares';
import './style.css';

class BookingList extends Component{
    componentDidMount(){
        this.props.getBookings(this.props.selectedParking)
    }
    cancelBooking(bookingId, parkingName, slotno, userId){
        this.props.cancelBooking(bookingId, parkingName, slotno, userId)
    }
    renderBookings(){
        return this.props.bookings.map((a,b) => {
            return a.map((x,y) => {
                return(
                    <li key={y}>
                        <h4>Parking Name: {x[1].parkingName}</h4>
                        <h5>Slot # : {x[1].slotno}</h5>
                        <h5>Booked By: {x[1].bookedBy.name}</h5>
                        <h5>{x[1].bookedBy.email}</h5>
                        <h6>Date: {x[1].date.date}</h6>
                        <h6>Start Time: {x[1].date.startTime}</h6>
                        <h6>End Time: {x[1].date.endTime}</h6>
                        <button onClick={() => this.cancelBooking(x[0], x[1].parkingName, x[1].slotno, x[1].bookedBy.uid)}>Cancel Booking</button>
                    </li>
                )
            })
        })
    }
    render(){
        return(
            <div>
                <ul className="bookings">
                    {this.renderBookings()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.AuthReducer.user,
        selectedParking: state.AdminReducer.selectedParking,
        bookings: state.AdminReducer.bookings
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getBookings: (parking) => {
            return dispatch(Middleware.getBookingsAdmin(parking))
        },
        cancelBooking: (bookingId, parkingName, slotno, userId) => {
            return dispatch(Middleware.cancelBookingByAdmin(bookingId, parkingName, slotno, userId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingList)