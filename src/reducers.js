import {
    combineReducers
} from 'redux';
import userReducer from './Login/Login.Reducers';
import rootReducer from './Root/Root.Reducers';

export default combineReducers({
    userStore: userReducer,
    rootReducer: rootReducer,
});