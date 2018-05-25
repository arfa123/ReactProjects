import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Middleware} from '../../store/middlewares/middlewares';
import './style.css';

class Feedbacks extends Component{
    componentWillMount(){
        this.props.getFeedbacks()
    }
    renderFeedbacks(){
        console.log("ge",this.props.feedbacks)
        return this.props.feedbacks.map((x,y) => {
            return Object.values(x).map((a,b) => {
                return(
                    <div key={b} style={{border: '1px solid black', margin: '5px', padding: '5px'}}>
                        <h5>{a.feedback}</h5>
                        <h6>Send by: {a.sender.name}</h6>
                    </div>
                )
            })
        })
    }
    render(){
        return(
            <div>
                {this.renderFeedbacks()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        feedbacks: state.AdminReducer.feedbacks
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getFeedbacks: () => {
            return dispatch(Middleware.getFeedbacks())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Feedbacks);