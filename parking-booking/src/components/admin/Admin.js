import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Middleware} from '../../store/middlewares/middlewares';
import './style.css';

class Admin extends Component{
    componentWillMount(){
        if(this.props.isLogin !== true){
            this.props.history.push('/')
        }
    }
    componentDidUpdate(){
        if(this.props.isLogin !== true){
            this.props.history.push('/')
        }
    }
    logout(){
        this.props.logout()
    }
    render(){
        return(
            <div>
                <div className="header">
                    <h2>Real Time Parking Booking App</h2>
                </div>
                <div className="dashboard">
                <div className="nav-bar">
                    <ul>
                        <li>
                            <span><Link to="/admin/users">Users</Link></span>
                        </li>
                        <li>
                            <span><Link to="/admin/bookings">Bookings</Link></span>
                        </li>
                        <li>
                            <span><Link to="/admin/feedbacks">Feedbacks</Link></span>
                        </li>
                        <li>
                            <span><Link to="/admin/parkings">Parking Areas</Link></span>
                        </li>
                    </ul>
                </div>
                <div className="user">
                        <h4>{this.props.user.name} &dArr;</h4>
                        <div onClick={() => this.logout()} className="logout">
                            <p>Logout</p>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.AuthReducer.user,
        isLogin: state.AuthReducer.isLogin
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        logout: () => {
            return dispatch(Middleware.signout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);