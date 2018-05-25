import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Middleware} from '../../store/middlewares/middlewares';
import BookingsList from './BookingsList';
import {selectedParking, disselectParking} from '../../store/actions/adminAction';
import './style.css';

class Bookings extends Component{
    componentWillMount(){
        this.props.getParkings()
    }
    parkingSelected(parkingName){
        if(this.props.selectedParking === undefined){
            this.props.parkingSelected(parkingName)
        }
        else{
            this.props.disselectParking()
        }
    }
    parkingDiselected(){
        this.props.disselectParking()
    }
    renderParkings(){
        return this.props.parkings.map((x,y) => {
            if(this.props.selectedParking !== undefined){
                if(x === this.props.selectedParking){
                    return(
                        <li style={{backgroundColor: '#ffffff', color: '#4CAF50'}} onClick={() => this.parkingDiselected()}>
                            <h4>{x}</h4>
                        </li>
                    )
                }
            }
            return(
                <li onClick={() => this.parkingSelected(x)}>
                    <h4>{x}</h4>
                </li>
            )
        })
    }
    bookings(){
        if(this.props.selectedParking !== undefined){
            return(
                <BookingsList />
            )
        }
    }
    render(){
        return(
            <div>
                <ul className="parkings">
                    {this.renderParkings()}
                </ul>
                {this.bookings()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.AuthReducer.user,
        parkings: state.AdminReducer.parkingAreas,
        selectedParking: state.AdminReducer.selectedParking
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getParkings: () => {
            return dispatch(Middleware.getParkingsAdmin())
        },
        parkingSelected: (parking) => {
            return dispatch(selectedParking(parking))
        },
        disselectParking: () => {
            return dispatch(disselectParking)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);