import * as types from "./types";

//Login Action Creators

export const loginSuccess = () => {
    return {
        type: types.LOGIN_SUCCESS,
        payload: { message: "Successful login" },
    };
};

export const loginFail = () => {
    return {
        type: types.LOGIN_FAIL,
        payload: { message: "Login failed" },
    };
};

//Logout Action Creator
export const logout = () => {
    return {
        type: types.LOGOUT,
        payload: { message: "Logged out at " + new Date().toString() },
    };
};

//Signup Action Creators
export const signupSuccess = () => {
    return {
        type: types.SIGNUP_SUCCESS,
        payload: { message: "Successful signup" },
    };
};
export const signupFail = () => {
    return {
        type: types.SIGNUP_FAIL,
        payload: { message: "Signup failed" },
    };
};

//Registration Action Creators
export const registerSuccess = () => {
    return {
        type: types.REGISTER_SUCCESS,
        payload: { message: "Successful registration" },
    };
};

export const registerFail = () => {
    return {
        type: types.REGISTER_FAIL,
        payload: { message: "Registration failed" },
    };
};

export const selectCategory = (serviceCategoryId) => {
    return {
        type: types.SELECT_CATEGORY,
        payload: { message: serviceCategoryId },
    }
}