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
    Root as NativeRoot
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
            <NativeRoot>
                <Routes/>
                <Spinner style={commonStyle.spinner}
                            visible={this.props.status === 'doing'}
                            textContent={"Loading..."} textStyle={{ color: '#FFFFFF' }} />
            </NativeRoot>

        );



    }
}