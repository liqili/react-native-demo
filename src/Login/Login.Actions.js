'use strict';
import actionTypes from './Login.Constants';
import { AlertIOS } from 'react-native';
import {
    Actions,
} from 'react-native-router-flux';

// fake user data
let testUser = {
    'name': 'juju',
    'age': '24',
    'avatar': 'https://avatars1.githubusercontent.com/u/1439939?v=3&s=460'
};

// for skip user 
let skipUser = {
    'name': 'guest',
    'age': 20,
    'avatar': 'https://avatars1.githubusercontent.com/u/1439939?v=3&s=460',
};

// login
export function logIn(opt,callBack){
    console.log("Login actions=>>>>>>>>>>>>>>>")
    return (dispatch) => {
        dispatch({'type': actionTypes.LOGGED_DOING});
        let inner_get = fetch('http://www.baidu.com')
            .then((res)=>{
                dispatch({'type': actionTypes.LOGGED_IN, user: testUser});
                if(typeof callBack === 'function')
                    callBack();
            }).catch((e)=>{
                AlertIOS.alert(e.message);
                dispatch({'type': actionTypes.LOGGED_ERROR, error: e});
            });
    }
}



// skip login
export function skipLogin(){
    return {
        'type': actionTypes.LOGGED_IN,
        'user': skipUser,
    }
}


// logout
export function logOut(){
    return {
        type: actionTypes.LOGGED_OUT
    }
}