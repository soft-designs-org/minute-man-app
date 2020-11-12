import * as types from "../actions/types";
import { RegisterInitialStates } from "../forms";

const register = (state = { RegisterInitialStates }, action) => {
    switch (action.type) {
        case types.REGISTER_SUCCESS:
            return state;
        case types.REGISTER_FAIL:
            return state;
        default:
            return state;
    }
};

export default register;