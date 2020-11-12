import * as types from "../actions/types";

const initialStates = {
    selectedCategory: ""
}

const selectCategory = (state = { initialStates }, action) => {
    switch (action.type) {
        case types.SELECT_CATEGORY:
            return ({...state }, { state: action.payload.message });
        default:
            return state;
    }
};

export default selectCategory;