import {
    combineReducers
} from 'redux';
import loginReducer from './Login/Login.Reducers';
import rootReducer from './Root/Root.Reducers';

export default combineReducers({
    userStore: loginReducer,
    rootReducer: rootReducer,
});