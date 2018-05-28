/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  connect
} from 'react-redux';
import NavigatorBar from 'react-native-navbar';

import commonStyles from '../Assets/styles/common';


export default class Home extends Component {

  constructor(props) {
    super(props);
  }



  render() {
    let {
      user
    } = this.props;
    return (
      <View style={[commonStyles.main, commonStyles.wrapper]}>
{/*      {this._renderNavBar()}
*/}      <View style={styles.container}>
      
        <Text>name: {user.name}</Text>
        <Text>age: {user.age}</Text>
        
      </View>
      </View>
    );

  }


  handlePress() {
    console.log('handlePress');

  }

  handleAsyncPress() {
    console.log('asyncPress');
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});