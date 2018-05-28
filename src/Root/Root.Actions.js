import actionTypes from './Root.Constants';
import {
    Actions,
} from 'react-native-router-flux';

export function goToRouter(key) {
    Actions[key].call();
    return {
        type: actionTypes.TO_LOGIN,
        value:key
    };
}

