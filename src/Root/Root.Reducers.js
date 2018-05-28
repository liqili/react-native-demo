import actionTypes from './Root.Constants'
const initialState = {
  routerKey: "login",
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TO_LOGIN:
      return { ...state,
        routerKey: "login"
      };
    case actionTypes.TO_HOME:
      return { ...state,
        routerKey: "home"
      };

    default:
      return state
  }
}