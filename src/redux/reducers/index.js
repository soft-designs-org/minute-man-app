import isLoggedIn from "./isLoggedIn";
import signup from "./signup";
import register from "./register"
import selectCategory from "./selectCategory";
import { LoginInitialStates } from "../forms";
import { SignupInitialStates } from "../forms";
import { RegisterInitialStates } from "../forms";
import { combineReducers } from "redux";
import { createForms } from 'react-redux-form';


const allReducers = combineReducers({
    isLoggedIn: isLoggedIn,
    ...createForms({
        login: LoginInitialStates
    }),

    signup: signup,
    ...createForms({
        signup: SignupInitialStates
    }),

    register: register,
    ...createForms({
        register: RegisterInitialStates
    }),

    selectCategory: selectCategory
})

export default allReducers;