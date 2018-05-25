<<<<<<< HEAD
import React, {Component} from 'react';
import {Link,browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {FirebaseAuthService} from '../../store/middlewares/authMiddleware';

class Signin extends Component{
    componentDidUpdate(){
        if(this.props.isLoged){
            browserHistory.push('/home')
        }
    }
    login(ev){
        ev.preventDefault();
        this.props.loading()
        let user = {
            email: this.refs.email.value,
            pass: this.refs.pass.value
        }
        this.props.signIn(user);
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
                    <button onClick={(ev) => this.login(ev)}>Login</button>
                    <Link to="/signup">Create an account</Link>
                </div>
            )
        }
    }
    render(){
        return(
            <div className="signin">
                <form action="">
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
    return {
        loading: () => {
            return dispatch(FirebaseAuthService.loader())
        },
        signIn: (user) => {
            return dispatch(FirebaseAuthService.loginUser(user));
        }
    }
}
const mapStateToProps = (state) => {
    return{
        isLoged: state.AuthReducer.isLogin,
        error: state.AuthReducer.errorMessage,
        isError: state.AuthReducer.isError,
        loader: state.AuthReducer.loader
    }
}

=======
import React, {Component} from 'react';
import {Link,browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {FirebaseAuthService} from '../../store/middlewares/authMiddleware';

class Signin extends Component{
    componentDidUpdate(){
        if(this.props.isLoged){
            browserHistory.push('/home')
        }
        if(this.props.isError){
            this.refs.button.disabled = false;
        }
    }
    login(ev){
        ev.preventDefault();
        ev.target.disabled = true;
        let user = {
            email: this.refs.email.value,
            pass: this.refs.pass.value
        }
        this.props.signIn(user);
    }
    render(){
        return(
            <div className="signin">
                <form action="">
                        <input type="email" ref="email" placeholder="Enter email"/><br/>
                        <input type="password" ref="pass" placeholder="Enter password"/><br/>
                        <p>{this.props.error.message}</p>
                        <button ref="button" onClick={(ev) => this.login(ev)}>Login</button>
                        <Link to="/signup">Create an account</Link>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (user) => {
            return dispatch(FirebaseAuthService.loginUser(user));
        },
        donorList: () => {
            return dispatch(FirebaseAuthService.getDonorsList())
        }
    }
}
const mapStateToProps = (state) => {
    return{
        isLoged: state.AuthReducer.isLogin,
        error: state.AuthReducer.errorMessage,
        isError: state.AuthReducer.isError
    }
}

>>>>>>> 30517cd8741ba6209f92cd5b3a3f6ad9ab3463c2
export default connect(mapStateToProps,mapDispatchToProps)(Signin);