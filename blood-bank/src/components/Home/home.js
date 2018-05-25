<<<<<<< HEAD
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {FirebaseAuthService} from '../../store/middlewares/authMiddleware';
import './home.css';
import DonorList from '../DonorList/donor2';

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            bloodGroup: ''
        }
    }
    componentWillMount(){
        if(this.props.login === false){
            browserHistory.push('/')
        }
    }
    componentDidMount(){
        this.props.donorList()
    }
    componentWillUpdate(){
        this.props.donorList()
    }
    componentDidUpdate(){
        if(this.props.login === false){
            browserHistory.push('/')
        }
    }
    logout(){
        this.props.signOut()
    }
    addDonor(ev){
        ev.preventDefault()
        let donor = {
            name: this.props.user.name,
            email: this.props.user.email,
            address: this.refs.address.value,
            contact: this.refs.num.value,
            blood: this.refs.blood.value
        }
        if(donor.address && donor.contact && donor.blood !== ''){
            this.props.addDonor(donor);
            this.refs.form.className = "hide"
        }
        else{
            alert("Please fill the input fields otherwise press cancel")
        }
    }
    showForm(ev){
        ev.preventDefault()
        this.refs.form.className = "show"
    }
    cancel(ev){
        ev.preventDefault()
        this.refs.form.className = "hide"
    }
    search(ev){
        ev.preventDefault()
        this.setState({
            bloodGroup: this.refs.searchBlood.value
        })
    }
    showStatus(){
        if(this.state.bloodGroup !== ''){
            return(
                <h3>Below is the list of donors who can donate blood to {this.state.bloodGroup}</h3>
            )
        }
    }
    remove(ev){
        ev.preventDefault()
        this.props.removeDonor()
    }
    showButton(){
        if(this.props.user.donor){
            return(
                <div>
                    <p>You have already registered as donor. To cancel registeration</p>
                    <button onClick={(ev) => this.remove(ev)}>Click Here</button>
                </div>
            )
        }
        else{
            return(
                <button onClick={(ev) => this.showForm(ev)}>Register as Donor</button>
            )
        }
    }
    render(){
        return(
            <div>
                <div className="dashboard">
                    <div className="heading">
                        <h2>Blood Bank App</h2>
                    </div>
                    <div className="user">
                        <h4>{this.props.user.name} &dArr;</h4>
                        <div onClick={() => this.logout()} className="logout">
                            <p>Logout</p>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="donor-form">
                    {this.showButton()}
                    <div ref="form" className="hide">
                        <form>
                            <input ref="num" type="number" placeholder="Enter Contact number"/><br/>
                            <input ref="address" type="text" placeholder="Enter Address"/><br/>
                            <select ref="blood">
                                <option selected disabled>Select your Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select><br/>
                            <button onClick={(ev) => this.addDonor(ev)}>Submit</button>
                            <button onClick={(ev) => this.cancel(ev)}>Cancel</button>
                        </form><br/>
                    </div>
                    <div>
                        <h3>Select Blood Group you need</h3>
                        <select ref="searchBlood" onChange={(ev) => this.search(ev)}>
                            <option selected value="">Show all</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                        {this.showStatus()}
                    </div>
                </div>
                <DonorList bloodGroup={this.state.bloodGroup}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        user: state.AuthReducer.authUser,
        login: state.AuthReducer.isLogin
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => {
            return dispatch(FirebaseAuthService.logout())
        },
        addDonor: (donor) => {
            return dispatch(FirebaseAuthService.addDonorToDatabase(donor))
        },
        donorList: () => {
            return dispatch(FirebaseAuthService.getDonorsList())
        },
        removeDonor: () => {
            return dispatch(FirebaseAuthService.removeFromDonor())
        }
    }
}

=======
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {FirebaseAuthService} from '../../store/middlewares/authMiddleware';
import './home.css';
import DonorList from '../DonorList/donor2';

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            bloodGroup: ''
        }
    }
    componentWillMount(){
        if(this.props.login === false){
            browserHistory.push('/')
        }
        this.props.donorList();
        console.log("component will mounted")
    }
    componentDidUpdate(){
        if(this.props.login === false){
            browserHistory.push('/')
        }
        console.log("component did update")
    }
    logout(){
        this.props.signOut()
    }
    addDonor(ev){
        ev.preventDefault()
        let donor = {
            name: this.props.user.name,
            email: this.props.user.email,
            address: this.refs.address.value,
            contact: this.refs.num.value,
            blood: this.refs.blood.value
        }
        if(donor.address && donor.contact && donor.blood !== ''){
            this.props.addDonor(donor);
            this.refs.form.className = "hide"
        }
        else{
            alert("Please fill the input fields otherwise press cancel")
        }
        this.props.donorList()
    }
    showForm(ev){
        ev.preventDefault()
        this.refs.form.className = "show"
    }
    cancel(ev){
        ev.preventDefault()
        this.refs.form.className = "hide"
    }
    search(ev){
        ev.preventDefault()
        this.setState({
            bloodGroup: this.refs.searchBlood.value
        })
    }
    showStatus(){
        if(this.state.bloodGroup !== ''){
            return(
                <h3>Below is the list of donors who can donate blood to {this.state.bloodGroup}</h3>
            )
        }
    }
    render(){
        return(
            <div>
                <div className="dashboard">
                    <div className="heading">
                        <h2>Blood Bank App</h2>
                    </div>
                    <div className="user">
                        <h4>{this.props.user.name} &dArr;</h4>
                        <div onClick={() => this.logout()} className="logout">
                            <p>Logout</p>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="donor-form">
                    <button onClick={(ev) => this.showForm(ev)}>Become Donor</button>
                    <div ref="form" className="hide">
                        <form>
                            <input ref="num" type="number" placeholder="Enter Contact number"/><br/>
                            <input ref="address" type="text" placeholder="Enter Address"/><br/>
                            <select ref="blood">
                                <option selected disabled>Select your Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select><br/>
                            <button onClick={(ev) => this.addDonor(ev)}>Submit</button>
                            <button onClick={(ev) => this.cancel(ev)}>Cancel</button>
                        </form><br/>
                    </div>
                    <div>
                        <h3>Select Blood Group you need</h3>
                        <select ref="searchBlood" onChange={(ev) => this.search(ev)}>
                            <option selected value="">Show all</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                        {this.showStatus()}
                    </div>
                </div>
                <DonorList bloodGroup={this.state.bloodGroup}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        user: state.AuthReducer.authUser,
        login: state.AuthReducer.isLogin
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => {
            return dispatch(FirebaseAuthService.logout())
        },
        addDonor: (donor) => {
            return dispatch(FirebaseAuthService.addDonorToDatabase(donor))
        },
        donorList: () => {
            return dispatch(FirebaseAuthService.getDonorsList())
        } 
    }
}

>>>>>>> 30517cd8741ba6209f92cd5b3a3f6ad9ab3463c2
export default connect(mapStateToProps,mapDispatchToProps)(Home);