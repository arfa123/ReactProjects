import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import App from '../App';
import {Middleware} from '../store/middlewares/middlewares';
import './style.css';

class Signup extends Component{
    componentDidUpdate(){
        if(this.props.isLogin){
            if(this.props.user.email === 'admin@admin.com'){
                this.props.history.push("/admin")
            }
            else{
                this.props.history.push('/user')
            }
        }
    }
    signup(ev){
        ev.preventDefault()
        let user = {
            name: this.refs.name.value,
            email: this.refs.email.value,
            password: this.refs.password.value
        }
        this.props.loading()
        this.props.signup(user)
    }
    loader(){
        if(this.props.loader){
            return(
                <div className="loader"></div>
            )
        }
        else{
            return(
            <div>
                <button onClick={(ev) => {this.signup(ev)}}>Signup</button><br />
                <Link to="/">Already have account?</Link>
            </div>)
        }
    }
    render(){
        return(
            <div className="login">
                <App />
                <form action="">
                    <input type="text" ref="name" placeholder="Enter Name"/><br />
                    <input type="text" ref="email" placeholder="Enter Email"/><br />
                    <input type="password" ref="password" placeholder="Enter Password"/><br />
                    <p>{this.props.error.message}</p><br/>
                    {this.loader()}
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.AuthReducer.user,
        isLogin: state.AuthReducer.isLogin,
        loader: state.AuthReducer.loader,
        error: state.AuthReducer.errorMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        signup: (user) => {
            return dispatch(Middleware.signupUser(user))
        },
        loading: () => {
            return dispatch({type: 'LOADING'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);