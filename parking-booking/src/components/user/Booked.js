import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Middleware} from '../../store/middlewares/middlewares';

class Booked extends Component{
    componentDidMount(){
        this.props.getBookings(this.props.user.uid)
    }
    componentDidUpdate(){
        console.log("bookings",this.props.bookings)
    }
    cancelBooking(bookingId,parkingName,slotno){
        this.props.cancelBooking(bookingId,parkingName,slotno,this.props.user.uid)
    }
    renderBookings(){
        return this.props.bookings.map((x,y) => {
            return(
                <li key={y}>
                    <h4>{x[1].parkingName}</h4>
                    <h5>Slot # {x[1].slotno}</h5>
                    <h6>Date: {x[1].date.date}</h6>
                    <h6>Start Time: {x[1].date.startTime}</h6>
                    <h6>End Time: {x[1].date.endTime}</h6>
                    <button onClick={() => this.cancelBooking(x[0],x[1].parkingName,x[1].slotno)}>Cancel Booking</button>
                </li>
            )
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
        bookings: state.UserReducer.bookings
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getBookings: (uid) => {
            return dispatch(Middleware.userBookings(uid))
        },
        cancelBooking: (bookingId,parkingName,slotno,uid) => {
            return dispatch(Middleware.cancelBooking(bookingId,parkingName,slotno,uid))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Booked);