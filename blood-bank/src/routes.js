<<<<<<< HEAD
import React, {Component} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/App/App';
import Signin from './components/SignIn/signin';
import Signup from './components/SignUp/signup';
import Home from './components/Home/home';

class Routes extends Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Signin} />
                    <Route path="/signup" component={Signup} />
                </Route>
                <Route path="/home" component={Home}></Route>
            </Router>
        )
    }
}

=======
import React, {Component} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/App/App';
import Signin from './components/SignIn/signin';
import Signup from './components/SignUp/signup';
import Home from './components/Home/home';

class Routes extends Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Signin} />
                    <Route path="/signup" component={Signup} />
                </Route>
                    <Route path="/home" component={Home}></Route>
            </Router>
        )
    }
}

>>>>>>> 30517cd8741ba6209f92cd5b3a3f6ad9ab3463c2
export default Routes;