import React, {
    Component
} from 'react';
import {
    Router,
    Scene,
    Actions,
    Stack
} from 'react-native-router-flux';
import {
    connect
} from 'react-redux';
import Login from './Login/Login.Container';
import Home from './Home/Home.Container';
import {
    Container
} from 'native-base';


export default class Routes extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="login" component={Login} title="Login" hideNavBar={true}/>
                    <Scene key="home" component={Home} title="Home" hideNavBar={true}/>
                </Stack>
            </Router>
        );



    }
}