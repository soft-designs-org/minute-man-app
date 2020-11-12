import * as types from "../actions/types";
import { LoginInitialStates } from "../forms";

const isloggedInReducer = (state = LoginInitialStates.isLoggedIn, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return ({...state }, !state);
        case types.LOGIN_FAIL:
            return {...state, state };
        case types.LOGOUT:
            return ({...state }, !state);
        default:
            return state;
    }
};

export default isloggedInReducer;