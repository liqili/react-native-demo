'use strict';
import actionTypes from './Login.Constants';
import {
    Toast
} from 'native-base';
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
export function logIn(opt, callBack) {
    return (dispatch) => {
        dispatch({
            'type': actionTypes.LOGGED_DOING
        });
        let inner_get = fetch('http://www.baidu.com')
            .then((res) => {
                dispatch({
                    'type': actionTypes.LOGGED_IN,
                    user: testUser
                });
                if (typeof callBack === 'function')
                    callBack();
            }).catch((err) => {
                Toast.show({
                    text: err.message,
                    type: "danger",
                    duration: 5000
                });
                dispatch({
                    'type': actionTypes.LOGGED_ERROR,
                    error: err
                });
            });
    }
}



// skip login
export function skipLogin() {
    return {
        'type': actionTypes.LOGGED_IN,
        'user': skipUser,
    }
}


// logout
export function logOut() {
    return {
        type: actionTypes.LOGGED_OUT
    }
}