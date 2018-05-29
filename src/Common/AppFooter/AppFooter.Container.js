import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import * as rootActions from "../../Root/Root.Actions";
import AppFooter from "./AppFooter";

export default connect((state) => ({
    isLoggedIn: state.userStore.isLoggedIn,
    user: state.userStore.user,
    status: state.userStore.status,
}), (dispatch) => ({
    rootActions: bindActionCreators(rootActions, dispatch),
}))(AppFooter);