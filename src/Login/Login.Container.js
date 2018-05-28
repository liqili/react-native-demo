import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import * as rootActions from "../Root/Root.Actions";
import * as loginActions from "../Login/Login.Actions";
import Login from "./Login";

export default connect((state) => ({
    isLoggedIn: state.userStore.isLoggedIn,
    user: state.userStore.user,
    status: state.userStore.status,
}), (dispatch) => ({
    rootActions: bindActionCreators(rootActions, dispatch),
    loginActions: bindActionCreators(loginActions, dispatch),
}))(Login);