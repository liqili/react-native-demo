import {
    connect
} from "react-redux";
import Root from "./Root";
import {
    bindActionCreators
} from "redux";
import * as rootActions from "../Root/Root.Actions";


export default connect(
    (state) => ({
        isLoggedIn: state.userStore.isLoggedIn,
        status: state.userStore.status,
        routerKey: state.rootReducer.routerKey,
    }), (dispatch) => ({
        rootActions: bindActionCreators(rootActions, dispatch),
    })

)(Root);