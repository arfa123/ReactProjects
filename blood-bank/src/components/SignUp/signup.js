<<<<<<< HEAD
import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {FirebaseAuthService} from '../../store/middlewares/authMiddleware';

class Signup extends Component{
    componentDidUpdate(){
        if(this.props.registered){
            browserHistory.push('/')
        }
    }
    createUser(ev){
        ev.preventDefault();
        this.props.loading()
        let user = {
            name: this.refs.name.value,
            email: this.refs.email.value,
            pass: this.refs.pass.value,
            donor: false
        }
        this.props.signUp(user);
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
                    <button onClick={(ev) => this.createUser(ev)}>Sign Up</button>
                    <Link to="/">Already have an account</Link>
                </div>
            )
        }
    }
    render(){
        return(
            <div className="signin">
                <form>
                    <input type="text" ref="name" placeholder="Enter name"/><br/>
                    <input type="email" ref="email" placeholder="Enter email"/><br/>
                    <input type="password" ref="pass" placeholder="Enter password"/><br/>
                    <p>{this.props.error.message}</p>
                    {this.loader()}
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        signUp: (user) => {
            return dispatch(FirebaseAuthService.registerUser(user));
        },
        loading: () => {
            return dispatch(FirebaseAuthService.loader())
        }
    }
}
const mapStateToProps = (state) => {
    return{
        error: state.AuthReducer.errorMessage,
        registered: state.AuthReducer.isRegistered,
        isError: state.AuthReducer.isError,
        loader: state.AuthReducer.loader
    }
}

=======
import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {FirebaseAuthService} from '../../store/middlewares/authMiddleware';

class Signup extends Component{
    componentDidUpdate(){
        if(this.props.registered){
            browserHistory.push('/')
        }
        if(this.props.isError){
            this.refs.button.disabled = false; 
        }
    }
    createUser(ev){
        ev.preventDefault();
        ev.target.disabled = true;
            let user = {
                name: this.refs.name.value,
                email: this.refs.email.value,
                pass: this.refs.pass.value
            }
            this.props.signUp(user);
        }

    render(){
        return(
            <div className="signin">
                <form>
                    <input type="text" ref="name" placeholder="Enter name"/><br/>
                    <input type="email" ref="email" placeholder="Enter email"/><br/>
                    <input type="password" ref="pass" placeholder="Enter password"/><br/>
                    <p>{this.props.error.message}</p>
                    <button ref="button" onClick={(ev) => this.createUser(ev)}>Sign Up</button>
                </form>
                <Link to="/">Already have an account</Link>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        signUp: (user) => {
            return dispatch(FirebaseAuthService.registerUser(user));
        }
    }
}
const mapStateToProps = (state) => {
    return{
        error: state.AuthReducer.errorMessage,
        registered: state.AuthReducer.isRegistered,
        isError: state.AuthReducer.isError
    }
}

>>>>>>> 30517cd8741ba6209f92cd5b3a3f6ad9ab3463c2
export default connect(mapStateToProps,mapDispatchToProps)(Signup);