'use strict';
import React, {
    Component
} from 'react';
import {
    bindActionCreators
} from "redux";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text
} from "native-base";
import {
    Actions,
} from 'react-native-router-flux';


import ModalBox from 'react-native-modalbox';

import * as rootActions from "../Root/Root.Actions";

import styles from "./styles";



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


    handleLogin() {
        // if (!this.state.username || !this.state.password) {
        //     AlertIOS.alert(
        //         'username, password?'
        //     );
        //     return;
        // }
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
            <Container style={styles.container}>
                    <Header>
                      <Left>
                        <Button transparent onPress={() => Actions.pop()}>
                          <Icon name="arrow-back" />
                        </Button>
                      </Left>
                      <Body>
                        <Title>Placeholder Label</Title>
                      </Body>
                      <Right />
                    </Header>
                    <Content>
                      <Form>
                        <Item>
                          <Input placeholder="Username" />
                        </Item>
                        <Item last>
                          <Input placeholder="Password" secureTextEntry />
                        </Item>
                      </Form>
                      <Button block style={{ margin: 15, marginTop: 50 }} onPress={this.handleLogin}>
                        <Text>Sign In</Text>
                      </Button>
                    </Content>
            </Container>
        );
    }
}