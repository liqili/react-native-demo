/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';
import NavigatorBar from 'react-native-navbar';
import commonStyles from '../Styles/common';
import AppFooter from '../Common/AppFooter/AppFooter.Container';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.logoutHandler = this.logoutHandler.bind(this);
  }

  logoutHandler(){
    this.props.loginActions.logOut();
    this.props.rootActions.goToRouter("login");
  }

  render() {
    let {
      user
    } = this.props;
    return (
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={()=>{this.logoutHandler()}}>
                <Icon name='log-out' />
                <Text>LogOut</Text>
              </Button>
            </Left>
            <Body>
              <Title>Home</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <Text>name: {user.name}</Text>
            <Text>age: {user.age}</Text>
          </Content>
          <AppFooter/>
        </Container>
    );

  }


  handlePress() {
    console.log('handlePress');

  }

  handleAsyncPress() {
    console.log('asyncPress');
  }

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });