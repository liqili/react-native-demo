import actionTypes from './Root.Constants';
import {
    Actions,
} from 'react-native-router-flux';

export function goToRouter(key) {
    Actions[key].call();
    return {
        type: actionTypes.TO_ROUTER,
        value:key
    };
}

export function drawerOpen() {
    Actions.drawerOpen();
    return {
        type: actionTypes.DRAWER_OPEN,
    };
}

export function drawerClose() {
    Actions.drawerClose();
    return {
        type: actionTypes.DRAWER_CLOSE,
    };
}

