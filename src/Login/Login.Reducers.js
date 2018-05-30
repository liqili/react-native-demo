'use strict';

import TYPES from './Login.Constants';

const initialState = {
  isLoggedIn: false,
  user: {},
  status: null,
};

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case TYPES.LOGGED_DOING:
      return {
        ...state,
        status: 'doing'
      };

    case TYPES.LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
        status: 'done'
      };

    case TYPES.LOGGED_OUT:
      console.log("Log out successuflly=>>>>>>>>>>")
      return {
        ...state,
        isLoggedIn: false,
        user: {},
        status: null
      };
    case TYPES.LOGGED_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
        status: null
      }

    default:
      return state;
  }

}