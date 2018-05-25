import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Admin from './components/admin/Admin';
import Users from './components/admin/Users';
import Bookings from './components/admin/Bookings';
import ParkingAreas from './components/admin/ParkingAreas';
import Feedbacks from './components/admin/Feedbacks';
import User from './components/user/User';
import EditProfile from './components/user/EditProfile';
import Booked from './components/user/Booked';
import GetParking from './components/user/GetParking';
import GiveFeedback from './components/user/GiveFeedback';

class Routes extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Login}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/admin" component={Admin} />
                    <Route path="/admin/users" component={Users} />
                    <Route path="/admin/bookings" component={Bookings} />
                    <Route path="/admin/parkings" component={ParkingAreas} />
                    <Route path="/admin/feedbacks" component={Feedbacks} />
                    <Route path="/user" component={User} />
                    <Route path="/user/edit" component={EditProfile}/>
                    <Route path="/user/booked" component={Booked} />
                    <Route path="/user/getparking" component={GetParking} />
                    <Route path="/user/givefeedback" component={GiveFeedback} />
                </div>
            </Router>
        )
    }
}

export default Routes;