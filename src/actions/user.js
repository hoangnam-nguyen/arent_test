import * as api from '../api';
import { AUTH, AUTH_ERROR, PASSWORD_UNMATCHED_ERROR, UPDATE_USER, GET_USER } from '../constants/actionTypes';

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signin(formData);
        dispatch({ type: AUTH, payload: data });
        navigate('/');
        window.location.reload();
    } catch (error) {
        dispatch({ type: AUTH_ERROR });
    }
};

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signup(formData);
        dispatch({ type: AUTH, payload: data });
        window.location.reload();
        navigate('/');
    } catch (error) {
        dispatch({ type: PASSWORD_UNMATCHED_ERROR });
    }
};

export const updateUser = (userData) => async (dispatch) => {
    try {
        const { data } = await api.updateUser(userData);
        dispatch({ type: UPDATE_USER, payload: data });
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
};

export const getUser = (userId) => async (dispatch) => {
    try {
        const { data } = await api.getUser(userId);
        dispatch({ type: GET_USER, payload: data });
    } catch (error) {
        console.log(error);
    }
};
