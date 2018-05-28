'use strict';
import React, {
    Component
} from 'react';
import {
    bindActionCreators
} from "redux";
import {
    Text,
    View,
    Platform,
    TextInput,
    Image,
    ImageBackground,
    AlertIOS,
} from 'react-native';
import {
    Actions,
} from 'react-native-router-flux';


import ModalBox from 'react-native-modalbox';

import * as rootActions from "../Root/Root.Actions";

import commonStyle from '../Assets/styles/common';
import loginStyle from '../Assets/styles/login';


export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'sup1',
            password: '123456',
            btnFlag: true,
        };
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePswd = this.onChangePswd.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.onSuccessLogin = this.onSuccessLogin.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps",nextProps);
    //     if (this.props.status !== nextProps.status && nextProps.status==="done") {
    //         this.props.rootActions.toHome();
    //     }

    // }

    handleLogin() {
        if (!this.state.username || !this.state.password) {
            AlertIOS.alert(
                'username, password?'
            );
            return;
        }
        let opt = {
            'name': this.state.username,
            'password': this.state.password,
        };
        this.props.loginActions.logIn(opt,this.onSuccessLogin);
    }

    onSuccessLogin(){
        this.props.rootActions.goToRouter("home");
    }


    handleRegister() {
        this.props.loginActions.skipLogin();
        this.props.rootActions.goToRouter("home");
    }

    onChangeName(text) {
        this.setState({
            'username': text
        });
    }

    onChangePswd(text) {
        this.setState({
            'password': text
        });
    }


    render() {
        return (
            <View style={[commonStyle.wrapper, loginStyle.loginWrap]}>
                <ImageBackground source={require('../Assets/imgs/icons/bg.png')} resizeMode='cover' style={{ width: '100%', height: '100%', flex: 1 }}>
                    <View style={loginStyle.loginMain}>
                        <View style={loginStyle.loginMainCon}>
                            <View style={loginStyle.comCulture}>
                                <Text style={[commonStyle.textCenter, { color: '#ccc' }]}>Welcome</Text>
                                <Text style={[commonStyle.textCenter, { color: '#ccc' }]}>You are the best.</Text>
                            </View>
                            <View style={loginStyle.formStyle}>
                                <View style={[loginStyle.formInput, loginStyle.formInputSplit]}>
                                    <Image source={require('../Assets/imgs/icons/user.png')} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
                                    <TextInput
                                        ref="login_name"
                                        placeholder='username'
                                        style={loginStyle.loginInput}
                                        onChangeText={this.onChangeName} />
                                </View>
                                <View style={loginStyle.formInput}>
                                    <Image source={require('../Assets/imgs/icons/passicon.png')} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
                                    <TextInput
                                        ref="login_psw"
                                        style={loginStyle.loginInput}
                                        secureTextEntry={true}
                                        placeholder='password'
                                        onChangeText={this.onChangePswd} />
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <View style={loginStyle.forget}>
                                        <View>
                                            <Image source={require('../Assets/imgs/icons/prompt.png')} style={{ width: 15, height: 15, resizeMode: 'contain', marginRight: 10 }} />
                                        </View>
                                        <View >
                                            <Text style={{ color: '#62a2e0', backgroundColor: 'white' }}>forget password?</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={loginStyle.btn}>
                                <View style={loginStyle.btnWrap}>
                                    <Text style={loginStyle.loginBtn1} onPress={this.handleLogin}>Log in</Text>
                                </View>
                                <View style={loginStyle.btnWrap}>
                                    <Text style={loginStyle.loginBtn2} onPress={this.handleRegister}>Skip</Text>
                                </View>
                            </View>
                        </View>


                    </View>
                </ImageBackground>


            </View>
        );
    }
}