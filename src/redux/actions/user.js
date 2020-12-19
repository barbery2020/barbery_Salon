import axios from 'axios';
import setAuthToken from '../../../config';
import {
	SET_CURRENT_USER,
	UPDATE_CURRENT_USER,
	SET_TOKEN,
	SET_LOADING,
	SET_ERROR,
	LOGIN,
	LOGOUT,
	SIGNUP,
} from '../types';

export const signup = (data) => async (dispatch) => {
	try {
		dispatch({ type: SET_LOADING, payload: true });
		const res = await axios.post('/barber', data);
		// console.log('object', res.data);
		dispatch({ type: SIGNUP, payload: res.data.token });
	} catch (err) {
		// console.log('object', err.response.data);
		dispatch({ type: SET_ERROR, payload: err.response.data.msg });
	}
};

export const login = (data) => async (dispatch) => {
	try {
		dispatch({ type: SET_LOADING, payload: true });
		const res = await axios.post('/barberAuth', data);
		dispatch({ type: LOGIN, payload: res.data.token });
	} catch (err) {
		dispatch({ type: SET_ERROR, payload: err.response.data.msg });
	}
};

export const logout = () => ({ type: LOGOUT });

export const getUser = () => async (dispatch) => {
	try {
		dispatch({ type: SET_LOADING, payload: true });
		const res = await axios.get('/barberAuth');
		dispatch({ type: SET_CURRENT_USER, payload: res.data });
	} catch (err) {
		dispatch({ type: SET_ERROR, payload: err.response.data.msg });
	}
};

export const updateUser = (data) => async (dispatch) => {
	try {
		dispatch({ type: SET_LOADING, payload: true });
		const res = await axios.put('/barber', data);
		dispatch({ type: UPDATE_CURRENT_USER, payload: res.data });
	} catch (err) {
		console.log('object', err.response.data);
		dispatch({ type: SET_ERROR, payload: err.response.data.msg });
	}
};
