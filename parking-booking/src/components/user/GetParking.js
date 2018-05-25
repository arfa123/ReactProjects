import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Middleware} from '../../store/middlewares/middlewares';
import GetSlots from './GetSlots';
import {selectedParking, selectedDate} from '../../store/actions/userAction';
import './style.css';

class GetParking extends Component{
    componentWillMount(){
        this.props.getParkings()
    }
    componentWillUnmount(){
        this.props.disselect()
    }
    parkingSelected(parking){
        this.props.parkingSelected(parking)
    }
    parkingDiselected(){
        this.props.disselect()
    }
    timingSelected(ev){
        ev.preventDefault()
        let date = this.refs.date.value.split("-")
        let startTime = this.refs.startTime.value.split(":")
        let endTime = this.refs.endTime.value.split(":")
        let curntDate = new Date()
        let currentDate = {
            date: curntDate.getDate(),
            month: (curntDate.getMonth()) + 1,
            year: curntDate.getFullYear(),
            hours: curntDate.getHours(),
            minutes: curntDate.getMinutes()
        }
        if(date[0] >= currentDate.year && date[1] >= currentDate.month){
            if(date[1] == currentDate.month){
                if(date[2] >= currentDate.date){
                    if(date[2] == currentDate.date){
                        if(startTime[0] >= currentDate.hours){
                            if(startTime[0] == currentDate.hours){
                                if(startTime[1] > currentDate.minutes){
                                    if(endTime[0] >= startTime[0]){
                                        if(endTime[0] == startTime[0]){
                                            if(endTime[1] > startTime[1]){
                                                let selectedDate = {
                                                    date: this.refs.date.value,
                                                    startTime: this.refs.startTime.value,
                                                    endTime: this.refs.endTime.value
                                                }
                                                this.props.dateSelected(selectedDate)
                                            }
                                            else{
                                                alert("End Time must be greater than Sart Time")
                                            }
                                        }
                                        else{
                                            let selectedDate = {
                                                date: this.refs.date.value,
                                                startTime: this.refs.startTime.value,
                                                endTime: this.refs.endTime.value
                                            }
                                            this.props.dateSelected(selectedDate)
                                        }
                                    }
                                    else{
                                        alert("End Time must be greater than Start Time")
                                    }
                                }
                                else{
                                    alert("Please select future minutes")
                                }
                            }
                            else{
                                if(endTime[0] >= startTime[0]){
                                    if(endTime[0] == startTime[0]){
                                        if(endTime[1] > startTime[1]){
                                            let selectedDate = {
                                                date: this.refs.date.value,
                                                startTime: this.refs.startTime.value,
                                                endTime: this.refs.endTime.value
                                            }
                                            this.props.dateSelected(selectedDate)
                                        }
                                        else{
                                            alert("End Time must be greater than Sart Time")
                                        }
                                    }
                                    else{
                                        let selectedDate = {
                                            date: this.refs.date.value,
                                            startTime: this.refs.startTime.value,
                                            endTime: this.refs.endTime.value
                                        }
                                        this.props.dateSelected(selectedDate)
                                    }
                                }
                                else{
                                    alert("End Time must be greater than Start Time")
                                }
                            }
                        }
                        else{
                            alert("Please select current or future hours")
                        }
                    }
                    else{
                        if(endTime[0] >= startTime[0]){
                            if(endTime[0] == startTime[0]){
                                if(endTime[1] > startTime[1]){
                                    let selectedDate = {
                                        date: this.refs.date.value,
                                        startTime: this.refs.startTime.value,
                                        endTime: this.refs.endTime.value
                                    }
                                    this.props.dateSelected(selectedDate)
                                }
                                else{
                                    alert("End Time must be greater than Sart Time")
                                }
                            }
                            else{
                                let selectedDate = {
                                    date: this.refs.date.value,
                                    startTime: this.refs.startTime.value,
                                    endTime: this.refs.endTime.value
                                }
                                this.props.dateSelected(selectedDate)
                            }
                        }
                        else{
                            alert("End Time must be greater than Start Time")
                        }
                    }
                }
                else{
                    alert("Please select current or future date")
                }
            }
            else{
                if(endTime[0] >= startTime[0]){
                    if(endTime[0] == startTime[0]){
                        if(endTime[1] > startTime[1]){
                            let selectedDate = {
                                date: this.refs.date.value,
                                startTime: this.refs.startTime.value,
                                endTime: this.refs.endTime.value
                            }
                            this.props.dateSelected(selectedDate)
                        }
                        else{
                            alert("End Time must be greater than Sart Time")
                        }
                    }
                    else{
                        let selectedDate = {
                            date: this.refs.date.value,
                            startTime: this.refs.startTime.value,
                            endTime: this.refs.endTime.value
                        }
                        this.props.dateSelected(selectedDate)
                    }
                }
                else{
                    alert("End Time must be greater than Start Time")
                }
            }
        }
        else{
            alert("Please select future or current date!")
        }
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
    renderForm(){
        if(this.props.selectedParking !== undefined){
            return(
                <div className="dateForm">
                    <form>
                        <label>Select Date:</label>
                        <input type="date" ref="date" /><br />
                        <label>Start Time:</label>
                        <input type="time" ref="startTime" /><br/>
                        <label>End Time:</label>
                        <input type="time" ref="endTime" /><br />
                        <button onClick={(ev) => this.timingSelected(ev)}>Show available slots</button>
                    </form>
                </div>
            )
        }
    }
    renderSlots(){
        if(this.props.selectedDate !== undefined){
            return(
                <GetSlots />
            )
        }
    }
    render(){
        return(
            <div>
                <ul className="boxes">
                    {this.renderParkings()}
                </ul>
                <div>
                    {this.renderForm()}
                    {this.renderSlots()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.AuthReducer.user,
        parkings: state.UserReducer.parkings,
        selectedParking: state.UserReducer.selectedParking,
        selectedDate: state.UserReducer.selectedDate
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getParkings: () => {
            return dispatch(Middleware.getParkings())
        },
        parkingSelected: (parking) => {
            return dispatch(selectedParking(parking))
        },
        dateSelected: (date) => {
            return dispatch(selectedDate(date))
        },
        disselect: () => {
            return dispatch({type: 'PARKING_DISSELECT'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetParking);