import actionTypes from './Root.Constants'
const initialState = {
  routerKey: "login",
};


export default function reducer(state = initialState, action) {

  switch (action.type) {
    case actionTypes.TO_ROUTER:
      return { ...state,
        routerKey: action.value
      };

    default:
      return state
  }
}