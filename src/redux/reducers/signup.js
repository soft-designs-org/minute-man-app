import * as types from "../actions/types";
import { SignupInitialStates } from "../forms";

const signup = (state = { SignupInitialStates }, action) => {
    switch (action.type) {
        case types.SIGNUP_SUCCESS:
            return state;
        case types.SIGNUP_FAIL:
            return state;
        default:
            return state;
    }
};

export default signup;