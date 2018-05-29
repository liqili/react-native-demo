import React, {
    Component
} from 'react';
import {
    Router,
    Scene,
    Actions,
    Stack
} from 'react-native-router-flux';
import Routes from '../routes';
import {
    Container
} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import commonStyle from '../Styles/common';


export default class Root extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Actions[this.props.routerKey].call()
        if (this.props.isLoggedIn) {
            Actions.home();
        } else {
            Actions.login();
        }
    }




    render() {
        return (
            <Container>
                <Routes/>
                <Spinner style={commonStyle.spinner}
                            visible={this.props.status === 'doing'}
                            textContent={"Loading..."} textStyle={{ color: '#FFFFFF' }} />
            </Container>

        );



    }
}