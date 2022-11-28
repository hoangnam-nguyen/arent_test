import { AUTH, AUTH_ERROR, AUTH_NOT_ERROR, LOGOUT, PASSWORD_UNMATCHED_ERROR, PASSWORD_MATCHED, UPDATE_USER, GET_USER, GET_ACCOUNT } from '../constants/actionTypes';

export default (state = { user: {}, isNotAuthenticated: false, passwordsNotMatched: false }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
            return { ...state, user: action.payload };
        case UPDATE_USER:
            return { ...state, user: action.payload };
        case GET_USER:
            return { ...state, user: action.payload };
        case LOGOUT:
            localStorage.clear();
            return { ...state, user: {} };
        case AUTH_ERROR:
            return { ...state, isNotAuthenticated: true };
        case AUTH_NOT_ERROR:
            return { ...state, isNotAuthenticated: false };
        case PASSWORD_UNMATCHED_ERROR:
            return { ...state, passwordsNotMatched: true };
        case PASSWORD_MATCHED:
            return { ...state, passwordsNotMatched: false };
        default:
            return state;
    }
}