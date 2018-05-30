import React, {
    Component
} from 'react';
import {
    Router,
    Scene,
    Drawer,
    Actions,
    Stack
} from 'react-native-router-flux';
import {
    connect
} from 'react-redux';
import Login from './Login/Login.Container';
import Home from './Home/Home.Container';
import Sidebar from './Common/Sidebar/Sidebar.Container';
import List from './Common/List/List';
import {
    Container
}
from 'native-base';


export default class Routes extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene drawer key="drawer"  contentComponent={Sidebar} hideNavBar={true}>
                        <Scene key="home" component={Home} title="Home" hideNavBar={true}/>
                        <Scene key="settings" component={List} title="Settings" hideNavBar={true}/>
                        <Scene modal key="login" component={Login} title="Login" hideNavBar={true}/>
                    </Scene>
                </Stack>
            </Router>
        );



    }
}