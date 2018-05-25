import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Middleware} from '../../store/middlewares/middlewares';

class GiveFeedback extends Component{
    componentDidMount(){
        this.props.getFeedbacks(this.props.user.uid)
    }
    sendFeedback(ev){
        ev.preventDefault()
        this.props.sendFeedback(this.refs.feedback.value, this.props.user)
        this.refs.feedback.value = ''
    }
    renderFeedbacks(){
        return this.props.feedbacks.map((x,y) => {
            return(
                <li>
                    <h5>{x.sender.name}</h5>
                    <h6>{x.feedback}</h6>
                </li>
            )
        })
    }
    render(){
        return(
            <div>
                <div>
                    <ul>{this.renderFeedbacks()}</ul>
                </div>
                <form>
                    <textarea ref="feedback"/>
                    <button onClick={(ev) => this.sendFeedback(ev)}>Send Feedback</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.AuthReducer.user,
        feedbacks: state.UserReducer.feedbacks
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getFeedbacks: (uid) => {
            return dispatch(Middleware.getUserFeedbacks(uid))
        },
        sendFeedback: (feedback,user) => {
            return dispatch(Middleware.sendFeedback(feedback,user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GiveFeedback);