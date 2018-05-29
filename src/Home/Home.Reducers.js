'use strict';

import TYPES from './Login.Constants';

const initialState = {
  isLoggedIn: false,
  user: {},
  status: null,
};

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case TYPES.LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
        status: null
      };

    default:
      return state;
  }

}