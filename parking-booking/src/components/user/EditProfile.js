import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Middleware } from '../../store/middlewares/middlewares';
import './style.css';

class EditProfile extends Component{
    save(ev){
        ev.preventDefault()
        let user = {
            name: this.refs.name.value,
            email: this.props.user.email,
            uid: this.props.user.uid,
            education: this.refs.education.value,
            contact: this.refs.contact.value
        }
        this.props.save(user)
    }
    render(){
        return(
            <div className="editForm">
                <form>
                    <input type="text" placeholder="Enter Name" ref="name" value={this.props.user.name}/><br />
                    <input type="text" placeholder="Enter Education" ref="education" /><br/>
                    <input type="text" placeholder="Enter Contact Number" ref="contact" /><br/>
                    <button onClick={(ev) => this.save(ev)}>Save</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.AuthReducer.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        save: (user) => {
            return dispatch(Middleware.saveUser(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);