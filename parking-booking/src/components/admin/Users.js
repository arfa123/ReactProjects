import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Middleware} from '../../store/middlewares/middlewares';
import './style.css';

class Users extends Component{
    componentWillMount(){
        this.props.getUsers()
    }
    renderUsers(){
        return this.props.usersList.filter((a) => {
            return a.name !== 'Admin'
        }).map((x,y) => {
            return(
                <li>
                    <h4>{x.name}</h4>
                    <h5>{x.email}</h5>
                    <h5>{x.education}</h5>
                    <h5>{x.contact}</h5>
                </li>
            )
        })
    }
    render(){
        return(
            <div>
                <ul className="users">
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.AuthReducer.user,
        usersList: state.AdminReducer.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getUsers: () => {
            return dispatch(Middleware.getUsers())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);